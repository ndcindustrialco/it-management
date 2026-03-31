"use client";
import { useRouter } from "next/navigation";

import React, { useState, useEffect } from "react";
import { Search, Loader2, Package, Plus, ClipboardCheck, AlertCircle, ShoppingBag, Link as LinkIcon, Check, User, Eye, FileDown, Clock, Minus, X } from "lucide-react";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { EmployeeSearchSelect } from "@/components/employee-search-select";
import { PDFViewer } from "@react-pdf/renderer";
import { BorrowRequisitionPDF } from "@/lib/pdf/BorrowRequisitionPDF";
import { useTranslation } from "@/lib/i18n/LanguageContext";

interface InventoryItem {
  id: string;
  remaining: number;
  equipmentEntry?: {
    item_name: string;
    item_type: string;
    brand_name?: string;
    unit?: string;
    list?: string;
    purchaseOrder?: {
       picture?: string;
       detail?: string;
    }
  }
}

interface BorrowGroup {
  id: string;
  group_code: string;
  userId: string;
  reason?: string;
  approval?: string;
  approval_status: string;
  approval_comment?: string;
  it_approval?: string;
  it_approval_status: string;
  it_approval_comment?: string;
  createdAt: string;
  requests: Array<{
    id: string;
    equipment_code: string;
    quantity: number;
    borrow_type: 'NEW' | 'BROKEN' | 'OTHER';
    remarks: string;
    equipmentList?: {
      equipmentEntry?: {
        list: string;
        brand_name: string;
        item_name: string;
        item_type: string;
      }
    }
  }>;
  user?: {
    employee?: {
      employee_name_th: string;
      employee_code: string;
    }
  }
}

interface Employee {
  id: string;
  employee_name_th: string;
  employee_code: string;
  department?: string;
  position?: string;
}

export default function BorrowPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const { t, locale } = useTranslation();
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [myHistory, setMyHistory] = useState<BorrowGroup[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [viewingItem, setViewingItem] = useState<InventoryItem | null>(null);
  const [viewGroup, setViewGroup] = useState<BorrowGroup | null>(null);
  const [showSuccess, setShowSuccess] = useState<{ id: string, approvalNeeded: boolean } | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isExportingPDF, setIsExportingPDF] = useState(false);
  const [invSearch, setInvSearch] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    reason: "",
    approval: "",
    date_needed: new Date().toISOString().split('T')[0]
  });

  const [cart, setCart] = useState<{
    id: string, // Temporary UI ID for manual items
    item?: InventoryItem, 
    manual_name?: string,
    manual_type?: string,
    quantity: number, 
    borrow_type: 'NEW' | 'BROKEN' | 'OTHER' | 'PURCHASE',
    remarks: string
  }[]>([]);

  const addToCart = (item: InventoryItem, isPurchase: boolean = false) => {
    setCart(prev => {
      const existing = prev.find(i => i.item?.id === item.id);
      if (existing) {
        // If it's a purchase, we don't cap by remaining
        const maxQty = isPurchase ? 999 : item.remaining;
        return prev.map(i => i.item?.id === item.id ? { ...i, quantity: Math.min(i.quantity + 1, maxQty) } : i);
      }
      return [...prev, { 
        id: item.id,
        item, 
        quantity: 1, 
        borrow_type: isPurchase ? 'PURCHASE' : 'NEW', 
        remarks: '' 
      }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const [filterType, setFilterType] = useState<'ME' | 'ALL'>('ME');

  const updateCartQuantity = (id: string, qty: number) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const updateCartItemDetails = (id: string, field: 'borrow_type' | 'remarks', value: string) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, [field]: value } : i));
  };

  useEffect(() => {
    if (session) {
      fetchData();
      fetchEmployees();
    }
  }, [session]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [invRes, histRes] = await Promise.all([
        fetch("/api/equipment-lists"),
        fetch("/api/equipment-requests")
      ]);
      const invData = await invRes.json();
      const histData = await histRes.json();
      if (Array.isArray(invData)) setInventory(invData);
      if (Array.isArray(histData)) setMyHistory(histData);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchEmployees = async () => {
    try {
      const res = await fetch("/api/employees");
      const data = await res.json();
      if (Array.isArray(data)) setEmployees(data);
    } catch (error) {
      console.error("Fetch employees error:", error);
    }
  };

  const handleBorrow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    
    const needsApproval = cart.some(i => i.manual_name || ["MAIN", "SOFTWARE"].includes(i.item?.equipmentEntry?.item_type || ""));
    if (needsApproval && !formData.approval) {
       setFormError(locale === 'th' ? "กรุณาระบุผู้อนุมัติ (หัวหน้างาน/ผู้จัดการแผนก)" : "Please specify an approver (Manager).");
      return;
    }
  setFormError(null);
    setIsSaving(true);
    try {
      const res = await fetch("/api/equipment-requests", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map(i => ({ 
            equipmentListId: i.item?.id || null,
            manual_item_name: i.manual_name || null,
            manual_item_type: i.manual_type || null,
            quantity: i.quantity,
            borrow_type: i.borrow_type,
            remarks: i.remarks
          })),
          reason: formData.reason,
          approval: formData.approval,
          date_needed: formData.date_needed
        })
      });

      if (res.ok) {
        const result = await res.json();
        setIsModalOpen(false);
        setCart([]);
        setFormData({ reason: "", approval: "", date_needed: new Date().toISOString().split('T')[0] });
        fetchData();
        setShowSuccess({ id: result.id, approvalNeeded: !!formData.approval });
      } else {
        const err = await res.json();
        alert("Error: " + err.error);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to submit request");
    } finally {
      setIsSaving(false);
    }
  };

  const copyApprovalLink = (id: string) => {
    const url = `${window.location.origin}/approve/${id}?t=g`;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleCancel = async (id: string) => {
    if (!confirm("Are you sure you want to cancel this request?")) return;
    try {
      const res = await fetch(`/api/equipment-requests/${id}`, { method: "DELETE" }); 
      if (res.ok) {
        setViewGroup(null);
        fetchData();
      }
    } catch (error) {
      console.error("Cancel error:", error);
    }
  };

  const handleRegenerate = async (id: string) => {
    if (!confirm("ท่านต้องการสร้างลิงก์อนุมัติใหม่ใช่หรือไม่? (สถานะการอนุมัติเดิมจะถูกรีเซ็ต)")) return;
    try {
      const res = await fetch(`/api/equipment-requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          approval_status: "PENDING",
          approval_comment: "",
        })
      });
      if (res.ok) {
        setViewGroup(null);
        fetchData();
        alert("สร้างลิงก์ใหม่สำเร็จ! กรุณากดคัดลอกลิงก์ส่งให้หัวหน้าอีกครั้ง");
      }
    } catch (error) {
      console.error("Regenerate error:", error);
    }
  };

   return (
    <div className="p-4 sm:p-6 space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#0F1059] tracking-tight uppercase">{t('borrow.title')}</h1>
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">{t('borrow.subtitle')}</p>
        </div>
        <Button 
          onClick={() => {
            setCart([]);
            setIsModalOpen(true);
          }}
          className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-[#0F1059] hover:bg-black text-white transition-all font-black text-[12px] uppercase tracking-[0.2em] active:scale-95 flex items-center justify-center gap-3"
        >
          <Plus className="h-5 w-5" />
          {t('borrow.create_new')}
        </Button>
      </header>

      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-3 bg-zinc-100/50 p-1.5 rounded-2xl border border-zinc-100 w-fit">
            <button 
              onClick={() => setFilterType('ME')}
              className={cn(
                "px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all",
                filterType === 'ME' ? "bg-white text-[#0F1059] shadow-sm" : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              {t('borrow.my_requests')}
            </button>
            <button 
              onClick={() => setFilterType('ALL')}
              className={cn(
                "px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all",
                filterType === 'ALL' ? "bg-white text-[#0F1059] shadow-sm" : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              {t('borrow.public_view')}
            </button>
          </div>

          <div className="flex items-center gap-2 bg-zinc-50 px-4 py-2.5 rounded-2xl border border-zinc-100 w-full sm:w-64">
            <Search className="h-4 w-4 text-zinc-400" />
            <input 
              className="bg-transparent border-none outline-none text-[11px] font-bold uppercase tracking-wider w-full"
              placeholder={t('borrow.search_history') + "..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <Card className="rounded-[32px] border-zinc-100 shadow-sm overflow-hidden bg-white">
          <div className="overflow-x-auto custom-scrollbar">
            <Table className="w-full text-left min-w-[700px]">
              <TableHeader className="bg-zinc-50/50">
              <TableRow className="border-none">
                <TableHead className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{t('borrow.request_info')}</TableHead>
                <TableHead className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] text-center">{t('borrow.created_date')}</TableHead>
                <TableHead className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] text-center">{t('borrow.qty')}</TableHead>
                <TableHead className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{t('borrow.status')}</TableHead>
                <TableHead className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-zinc-50 text-[#0F1059]">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i} className="border-none">
                    <TableCell colSpan={5} className="h-20 animate-pulse bg-zinc-50/20" />
                  </TableRow>
                ))
              ) : myHistory.filter(h => filterType === 'ALL' || h.userId === (session?.user as any)?.id).length === 0 ? (
                <TableRow className="border-none">
                  <TableCell colSpan={5} className="px-8 py-32 text-center text-zinc-300 italic font-black uppercase tracking-widest text-xs">
                    {filterType === 'ME' ? t('borrow.no_requests') : t('borrow.no_history')}
                  </TableCell>
                </TableRow>
              ) : myHistory.filter(h => filterType === 'ALL' || h.userId === (session?.user as any)?.id).map((g: BorrowGroup) => (
                <TableRow key={g.id} className="hover:bg-zinc-50/40 transition-colors group border-none">
                  <TableCell className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-[#0F1059]/5 flex items-center justify-center text-[#0F1059] shrink-0 font-bold text-xs ring-4 ring-[#0F1059]/5">
                        {g.requests.length}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] font-black text-[#0F1059]/60 uppercase tracking-widest mb-0.5">{g.group_code}</span>
                        <div className="font-bold text-[15px] truncate max-w-[400px]">
                          {g.requests.length === 1 
                            ? g.requests[0].equipmentList?.equipmentEntry?.list 
                            : (locale === 'th' ? `รายการเบิกแบบกลุ่ม (${g.requests.length} รายการ)` : `Batch Request (${g.requests.length} items)`)}
                        </div>
                        {filterType === 'ALL' && (
                          <div className="text-[10px] font-bold text-zinc-400 uppercase mt-1">{t('requests.requestor')}: {g.user?.employee?.employee_name_th || 'System User'}</div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-8 py-6 text-center text-xs font-bold text-zinc-500 uppercase tracking-tighter">
                    {new Date(g.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="px-8 py-6 text-center">
                    <span className="text-sm font-black text-[#0F1059]">{g.requests.reduce((acc, r) => acc + r.quantity, 0)}</span>
                  </TableCell>
                  <TableCell className="px-8 py-6">
                    <Badge variant={g.approval_status === "APPROVED" ? "success" : g.approval_status === "REJECTED" ? "destructive" : "warning"} className="rounded-lg text-[9px] font-black uppercase tracking-widest px-3 py-1 border-none shadow-xs">
                      {g.approval_status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-8 py-6 text-right">
                    <Button
                      onClick={() => setViewGroup(g)}
                      variant="ghost"
                      className="h-10 w-10 rounded-xl bg-zinc-50 hover:bg-[#0F1059]/5 text-[#0F1059] opacity-0 group-hover:opacity-100 transition-all border border-transparent hover:border-[#0F1059]/10"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </Card>
      </section>

       {/* Borrow Group Details Modal */}
       <Modal 
         isOpen={!!viewGroup} 
         onClose={() => setViewGroup(null)} 
         title={t('borrow.batch_details')}
       >
         <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-4">
               <div>
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-2">{t('borrow.group_code')}</p>
                  <p className="text-sm font-bold text-[#0F1059]">{viewGroup?.group_code}</p>
               </div>
               
               <div className="space-y-3">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">{t('borrow.itemized_list')}</p>
                  <div className="space-y-2">
                     {viewGroup?.requests.map((item, idx) => (
                        <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-white border border-zinc-100">
                           <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-[#0F1059] truncate">{item.equipmentList?.equipmentEntry?.list}</p>
                              <div className="flex items-center gap-2 mt-1">
                                 <Badge variant="secondary" className="text-[8px] font-black px-1.5 py-0 h-4 uppercase">
                                    {item.borrow_type === 'NEW' ? (locale === 'th' ? 'ของใหม่' : 'NEW') : 
                                     item.borrow_type === 'BROKEN' ? (locale === 'th' ? 'ชำรุด' : 'BROKEN') : 
                                     item.borrow_type === 'OTHER' ? (locale === 'th' ? 'อื่นๆ' : 'OTHER') : item.borrow_type}
                                 </Badge>
                                 <span className="text-[10px] text-zinc-400 font-medium">{t('borrow.qty')}: {item.quantity}</span>
                              </div>
                           </div>
                           <span className="text-[10px] font-mono text-zinc-300 ml-2">{item.equipment_code}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-1 pt-2 border-t border-zinc-200/50">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{t('borrow.primary_reason')}</p>
                   <p className="text-[12px] font-medium text-zinc-600 leading-relaxed whitespace-pre-line">{viewGroup?.reason || t('borrow.no_additional_context')}</p>
               </div>
            </div>

             <div className="p-4 rounded-xl border border-zinc-100 bg-white shadow-sm space-y-4">
               {viewGroup?.approval && (
                 <div>
                   <div className="flex items-center justify-between mb-2">
                     <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{t('requests.approval_status')}</p>
                     <Badge variant={viewGroup?.approval_status === "APPROVED" ? "success" : viewGroup?.approval_status === "REJECTED" ? "destructive" : "warning"} className="rounded-lg text-[10px] font-black uppercase tracking-widest shadow-none">
                        {viewGroup?.approval_status}
                     </Badge>
                   </div>
                   <div className="flex items-center justify-between text-right mb-1">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest text-left">{t('requests.approver')}</p>
                      <p className="text-xs font-bold text-[#0F1059]">{viewGroup.approval}</p>
                   </div>
                   {viewGroup?.approval_comment && (
                     <div className="px-3 py-2 mt-2 rounded-xl bg-amber-50/50 border border-amber-100/50 text-left">
                       <p className="text-[9px] font-black text-amber-600/70 uppercase mb-0.5">{locale === 'th' ? 'ความเห็นจากผู้อนุมัติ' : 'Approver Comment'}</p>
                       <p className="text-[11px] font-medium text-amber-900">{viewGroup.approval_comment}</p>
                     </div>
                   )}
                 </div>
               )}

               <div className={cn("pt-4 border-zinc-100", viewGroup?.approval ? "border-t" : "")}>
                 <div className="flex items-center justify-between mb-2">
                   <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{locale === 'th' ? 'สถานะฝ่ายไอที (IT)' : 'IT Status'}</p>
                   <Badge variant={viewGroup?.it_approval_status === "APPROVED" ? "success" : viewGroup?.it_approval_status === "REJECTED" ? "destructive" : "warning"} className="rounded-lg text-[10px] font-black uppercase tracking-widest shadow-none">
                      {viewGroup?.it_approval_status}
                   </Badge>
                 </div>
                 {viewGroup?.it_approval && (
                   <div className="flex items-center justify-between text-right mb-1">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest text-left">{locale === 'th' ? 'เจ้าหน้าที่ไอที' : 'IT Approver'}</p>
                      <p className="text-xs font-bold text-[#0F1059]">{viewGroup.it_approval}</p>
                   </div>
                 )}
                 {viewGroup?.it_approval_comment && (
                   <div className="px-3 py-2 mt-2 rounded-xl bg-sky-50/50 border border-sky-100/50 text-left">
                     <p className="text-[9px] font-black text-sky-600/70 uppercase mb-0.5">{locale === 'th' ? 'ความเห็นจากไอที' : 'IT Comment'}</p>
                     <p className="text-[11px] font-medium text-sky-900">{viewGroup.it_approval_comment}</p>
                   </div>
                 )}
               </div>

               <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                 <div>
                   <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{locale === 'th' ? 'วันที่สร้าง' : 'Created At'}</p>
                   <p className="text-[10px] font-bold text-zinc-600">{viewGroup?.createdAt ? new Date(viewGroup.createdAt).toLocaleString(locale === 'th' ? 'th-TH' : 'en-GB') : '-'}</p>
                 </div>
               </div>
             </div>

             {viewGroup?.approval && (viewGroup.userId === (session?.user as any)?.id || (session?.user as any)?.role === 'admin') && (
               <div className="space-y-3 animate-in fade-in duration-500">
                  <div className="flex gap-2">
                     <Button 
                        onClick={() => copyApprovalLink(viewGroup.id)}
                        className="flex-1 h-12 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#0F1059] text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
                     >
                        <LinkIcon className="h-3.5 w-3.5" /> {t('common.copy_link')}
                     </Button>
                     {viewGroup.approval_status !== 'PENDING' && (
                        <Button 
                           onClick={() => handleRegenerate(viewGroup.id)}
                           className="flex-1 h-12 rounded-xl bg-[#0F1059]/5 hover:bg-[#0F1059]/10 text-[#0F1059] text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 border border-[#0F1059]/10"
                        >
                           <Plus className="h-3.5 w-3.5" /> {t('common.generate_new')}
                        </Button>
                     )}
                  </div>
               </div>
             )}
            
            <div className="flex flex-wrap gap-3">
               <Button 
                    onClick={() => setViewGroup(null)}
                    className="flex-1 min-w-[120px] h-12 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-[11px] font-black uppercase tracking-widest"
               >
                    {t('common.close')}
               </Button>
               <Button 
                    onClick={() => setIsPreviewModalOpen(true)}
                    className="flex-1 min-w-[120px] h-12 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-100 text-[11px] font-black uppercase tracking-widest"
               >
                   <Eye className="h-4 w-4 mr-2" /> {t('common.preview_pdf')}
               </Button>
                {viewGroup?.approval_status === 'PENDING' && (viewGroup.userId === (session?.user as any)?.id || (session?.user as any)?.role === 'admin') && (
                  <Button 
                       onClick={() => handleCancel(viewGroup?.id!)}
                       className="flex-1 min-w-[150px] h-12 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-[11px] font-black uppercase tracking-widest"
                  >
                       {t('requests.cancel_request')}
                  </Button>
               )}
            </div>
         </div>
       </Modal>

      {/* Equipment Specs Modal */}
      <Modal 
        isOpen={!!viewingItem} 
        onClose={() => setViewingItem(null)} 
        title={t('borrow.technical_spec')}
      >
        <div className="space-y-6">
           {viewingItem?.equipmentEntry?.purchaseOrder?.picture ? (
              <div className="w-full h-64 rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200">
                 <img src={viewingItem.equipmentEntry.purchaseOrder.picture} alt="" className="w-full h-full object-contain" />
              </div>
           ) : (
              <div className="w-full h-64 rounded-3xl bg-zinc-50 flex items-center justify-center border border-dashed border-zinc-200 text-zinc-300">
                 <ShoppingBag className="h-12 w-12 opacity-20" />
              </div>
           )}

           <div className="space-y-4">
              <div className="space-y-1">
                 <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{viewingItem?.equipmentEntry?.brand_name || t('borrow.generic_brand')}</span>
                    <Badge variant="secondary" className="rounded-lg h-5 text-[9px] font-black uppercase bg-[#0F1059]/5 text-[#0F1059] border-none">
                       {viewingItem?.equipmentEntry?.item_type === 'MAIN' ? t('categories.hardware') : viewingItem?.equipmentEntry?.item_type}
                    </Badge>
                 </div>
                 <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight">{viewingItem?.equipmentEntry?.list || viewingItem?.equipmentEntry?.item_name}</h3>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-4">
                 <p className="text-sm font-medium text-zinc-600 leading-relaxed italic whitespace-pre-line">
                    {viewingItem?.equipmentEntry?.purchaseOrder?.detail || t('borrow.no_additional_specs')}
                 </p>
              </div>
           </div>

           <div className="flex gap-3">
              <Button 
                   onClick={() => setViewingItem(null)}
                   className="flex-1 h-12 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-[11px] font-black uppercase tracking-widest"
              >
                   {t('common.close')}
              </Button>
              <Button 
                   onClick={() => { addToCart(viewingItem!); setViewingItem(null); }}
                   className="flex-1 h-12 rounded-xl bg-[#0F1059] hover:bg-[#0F1059]/90 text-white text-[11px] font-black uppercase tracking-widest shadow-lg shadow-[#0F1059]/20"
              >
                   {t('borrow.add_to_cart')}
              </Button>
           </div>
        </div>
      </Modal>

      {/* Integrated Request Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={t('borrow.request_equipment')}
        size="xl"
      >
        <form onSubmit={handleBorrow} className="grid grid-cols-1 lg:grid-cols-2 gap-8 outline-none">
             <div className="space-y-6">
                  <div>
                     <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-3">1. {t('borrow.select_items')}</p>
                     <div className="relative mb-4">
                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                       <input 
                         className="w-full bg-zinc-50 border border-zinc-100 rounded-xl pl-10 pr-4 py-3 text-sm font-bold uppercase outline-none focus:bg-white focus:ring-2 focus:ring-[#0F1059]/5 transition-all"
                         placeholder={t('borrow.search_store') + "..."}
                         value={invSearch}
                         onChange={(e) => setInvSearch(e.target.value)}
                       />
                     </div>

                     <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar border border-zinc-100/50 rounded-2xl p-2 bg-zinc-50/30">
                       {inventory
                         .filter(item => {
                            const searchLow = invSearch.toLowerCase();
                            const matchesSearch = (item.equipmentEntry?.list || item.equipmentEntry?.item_name || "").toLowerCase().includes(searchLow) ||
                                                 (item.equipmentEntry?.brand_name || "").toLowerCase().includes(searchLow);
                            return matchesSearch;
                         })
                         .map(item => {
                           const isInCart = cart.find(i => i.id === item.id);
                           return (
                             <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-white border border-zinc-50 shadow-sm group">
                               <div className="flex items-center gap-3 overflow-hidden">
                                 <div className="h-10 w-10 rounded-lg bg-zinc-100 overflow-hidden shrink-0 hidden sm:block">
                                    {item.equipmentEntry?.purchaseOrder?.picture && <img src={item.equipmentEntry.purchaseOrder.picture} className="w-full h-full object-cover" />}
                                 </div>
                                 <div className="min-w-0">
                                    <p className="text-xs font-bold text-[#0F1059] truncate">{item.equipmentEntry?.list || item.equipmentEntry?.item_name}</p>
                                    <p className="text-[9px] font-bold text-zinc-400 uppercase">{item.equipmentEntry?.brand_name} • {t('inventory.stock_count')}: {item.remaining}</p>
                                 </div>
                               </div>
                               <Button 
                                 type="button" 
                                 onClick={() => {
                                    if (item.remaining === 0) {
                                       const name = item.equipmentEntry?.list || item.equipmentEntry?.item_name || "";
                                       router.push(`/user/my-requests?action=purchase&item=${encodeURIComponent(name)}`);
                                       return;
                                    }
                                    addToCart(item, false);
                                 }}
                                 disabled={!!isInCart && item.remaining > 0}
                                 className={cn(
                                   "h-8 px-4 rounded-lg text-[10px] font-black uppercase tracking-widest",
                                   isInCart ? "bg-emerald-50 text-emerald-500" : 
                                   item.remaining === 0 ? "bg-rose-500 text-white hover:bg-rose-600" : "bg-[#0F1059] text-white"
                                 )}
                               >
                                 {item.remaining === 0 ? (locale === 'th' ? 'ขอซื้อ' : 'REQUEST BUY') : (isInCart ? <Check className="h-3.5 w-3.5" /> : t('borrow.pick'))}
                               </Button>
                             </div>
                           );
                         })}
                      </div>
                   </div>
              </div>

             <div className="space-y-6 lg:border-l lg:pl-8 border-zinc-100">
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">2. {t('borrow.manage_selection')} ({cart.length})</p>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {cart.length === 0 ? (
                      <div className="py-20 text-center border-2 border-dashed border-zinc-100/50 rounded-3xl text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] bg-zinc-50/50">{t('borrow.no_items_selected')}</div>
                    ) : (
                      cart.map(cartItem => (
                      <div key={cartItem.id} className="p-4 bg-white border border-zinc-100 rounded-2xl shadow-sm space-y-4 group/item">
                         <div className="flex items-center justify-between gap-4">
                            <div className="min-w-0 flex-1">
                               <p className="text-[13px] font-black text-[#0F1059] truncate uppercase tracking-tight">
                                  {cartItem.manual_name || cartItem.item?.equipmentEntry?.list}
                               </p> 
                               <div className="flex items-center gap-2 mt-0.5">
                                  <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                                     {cartItem.manual_type || (cartItem.item?.equipmentEntry?.item_type === 'MAIN' ? t('categories.hardware') : cartItem.item?.equipmentEntry?.item_type)}
                                  </span>
                                  {cartItem.item && (
                                     <>
                                        <span className="h-1 w-1 bg-zinc-200 rounded-full" />
                                        <span className={cn("text-[9px] font-bold uppercase", cartItem.item.remaining === 0 ? "text-rose-500" : "text-emerald-500")}>
                                           {t('inventory.stock_count')}: {cartItem.item.remaining}
                                        </span>
                                     </>
                                  )}
                               </div>
                            </div>
                            <div className="flex items-center gap-2">
                               <div className="flex items-center bg-zinc-50 rounded-xl border border-zinc-100 overflow-hidden">
                                 <button type="button" onClick={() => updateCartQuantity(cartItem.id, Math.max(1, cartItem.quantity - 1))} className="w-9 h-9 flex items-center justify-center text-[#0F1059] hover:bg-zinc-100 transition-colors font-bold">-</button>
                                 <span className="text-[12px] font-black min-w-[30px] text-center text-[#0F1059]">{cartItem.quantity}</span>
                                 <button type="button" onClick={() => updateCartQuantity(cartItem.id, Math.min(cartItem.item?.remaining || 999, cartItem.quantity + 1))} className="w-9 h-9 flex items-center justify-center text-[#0F1059] hover:bg-zinc-100 transition-colors font-bold">+</button>
                               </div>
                               <button type="button" onClick={() => removeFromCart(cartItem.id)} className="text-zinc-300 hover:text-rose-500 hover:bg-rose-50 p-2 rounded-xl transition-all"><X className="h-4 w-4" /></button>
                            </div>
                         </div>
                         
                         <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-50">
                            <div className="space-y-1">
                               <p className="text-[8px] font-black text-zinc-400 uppercase tracking-widest ml-1">{t('borrow.borrow_type')}</p>
                               <select 
                                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-3 py-2 text-[10px] font-black uppercase outline-none focus:ring-2 focus:ring-[#0F1059]/5 transition-all"
                                  value={cartItem.borrow_type}
                                  onChange={(e) => updateCartItemDetails(cartItem.id, 'borrow_type', e.target.value as any)}
                               >
                                  <option value="NEW">{locale === 'th' ? 'เบิกของใหม่ / เบิกปกติ' : 'BORROW NEW'}</option>
                                  <option value="PURCHASE">{locale === 'th' ? 'แจ้งซื้อกรณี stock 0' : 'NEW PURCHASE'}</option>
                                  <option value="BROKEN">{locale === 'th' ? 'แจ้งซ่อม / ทดแทน' : 'REPLACE BROKEN'}</option>
                                  <option value="OTHER">{locale === 'th' ? 'อื่นๆ' : 'OTHER'}</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <p className="text-[8px] font-black text-zinc-400 uppercase tracking-widest ml-1">{t('borrow.remarks')}</p>
                               <input 
                                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-3 py-2 text-[10px] font-bold outline-none focus:bg-white focus:ring-2 focus:ring-[#0F1059]/5 transition-all"
                                  placeholder={t('borrow.remarks') + "..."}
                                  value={cartItem.remarks}
                                  onChange={(e) => updateCartItemDetails(cartItem.id, 'remarks', e.target.value)}
                               />
                            </div>
                         </div>
                      </div>
                    )))}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-100">
                   <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">3. {t('borrow.request_info_step')}</p>
                   <textarea 
                      required
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none min-h-[80px]"
                      placeholder={t('borrow.describe_purpose') + "..."}
                      value={formData.reason}
                      onChange={(e) => setFormData({...formData, reason: e.target.value})}
                   />
                </div>

                {cart.some(i => i.manual_name || ["MAIN", "SOFTWARE"].includes(i.item?.equipmentEntry?.item_type || "")) && (
                   <div className="space-y-3 animate-in fade-in duration-300">
                       <p className="text-[10px] font-black text-[#0F1059] uppercase tracking-widest leading-none">4. {t('borrow.approver')}</p>
                       <EmployeeSearchSelect 
                          value={formData.approval}
                          onChange={(val) => {
                             setFormData({...formData, approval: val});
                             if (val) setFormError(null);
                          }}
                          employees={employees}
                          placeholder={t('borrow.search_approver')}
                       />
                       {formError && <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mt-1">! {formError}</p>}
                       <p className="text-[10px] font-bold text-amber-500 uppercase tracking-tighter">* {t('requests.supervisor_needed_hint')}</p>
                   </div>
                )}

                <div className="pt-4">
                   <Button 
                     type="submit" 
                     disabled={isSaving || cart.length === 0}
                     className="w-full h-14 rounded-2xl bg-[#0F1059] hover:bg-black text-white shadow-xl shadow-[#0F1059]/10 text-[12px] font-black uppercase tracking-[0.2em] transition-all active:scale-95"
                   >
                      {isSaving ? <Loader2 className="h-5 w-5 animate-spin" /> : t('borrow.confirm_request')}
                   </Button>
                </div>
             </div>
        </form>
      </Modal>

      {/* Success Modal */}
      <Modal 
        isOpen={!!showSuccess} 
        onClose={() => setShowSuccess(null)} 
        title={t('borrow.success_title')}
      >
        <div className="flex flex-col items-center text-center space-y-6 pt-4">
           <div className="h-20 w-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center ring-8 ring-emerald-50/50">
              <ClipboardCheck className="h-10 w-10" />
           </div>
           
           <div className="space-y-2">
              <h3 className="text-xl font-black text-[#0F1059] uppercase tracking-tight">{locale === 'th' ? 'บันทึกข้อมูลสำเร็จ!' : 'Submitted Successfully!'}</h3>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">
                 {showSuccess?.approvalNeeded 
                    ? (locale === 'th' ? 'กรุณาส่งลิงก์ให้หัวหน้าแผนกเพื่อขอการอนุมัติ' : 'Please send link to your supervisor for approval')
                    : (locale === 'th' ? 'รายการของคุณถูกส่งไปยังฝ่าย IT เรียบร้อยแล้ว' : 'Your request has been sent to IT Dept.')}
              </p>
           </div>

            {showSuccess?.approvalNeeded && (
              <div className="w-full p-4 rounded-2xl bg-[#0F1059]/5 border border-[#0F1059]/10 space-y-3">
                 <p className="text-[10px] font-black text-[#0F1059] uppercase tracking-[0.25em] text-left ml-1">{t('requests.approval_link')}</p>
                 <div className="flex gap-2">
                     <div className="flex-1 h-12 bg-white rounded-xl border flex items-center px-4 overflow-hidden border-[#0F1059]/10">
                         <span className="text-[10px] text-zinc-400 truncate font-mono">
                           {typeof window !== 'undefined' ? `${window.location.origin}/approve/${showSuccess.id}?t=g` : ''}
                         </span>
                     </div>
                     <Button 
                         onClick={() => copyApprovalLink(showSuccess.id)}
                         className={cn(
                           "h-12 rounded-xl transition-all duration-300 font-black text-[10px] uppercase tracking-widest shrink-0",
                           isCopied ? "bg-emerald-500 text-white" : "bg-[#0F1059] text-white"
                         )}
                     >
                         {isCopied ? <><Check className="h-3.5 w-3.5 mr-1.5" /> {t('common.copied')}</> : <><LinkIcon className="h-3.5 w-3.5 mr-1.5" /> {t('common.copy_link')}</>}
                     </Button>
                 </div>
              </div>
            )}

            <Button 
               onClick={() => setShowSuccess(null)}
               className="w-full h-12 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-[11px] font-black uppercase tracking-widest mt-4"
            >
               {t('common.ok')}
            </Button>
         </div>
      </Modal>

      {/* PDF Preview Modal */}
      <Modal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
        title={t('common.preview_pdf')}
        size="xl"
      >
        <div className="h-[75vh] w-full rounded-2xl overflow-hidden border border-zinc-100">
          {viewGroup && (
            <PDFViewer width="100%" height="100%" showToolbar={true}>
              <BorrowRequisitionPDF data={viewGroup} />
            </PDFViewer>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <Button 
            onClick={() => setIsPreviewModalOpen(false)}
            className="rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-[11px] font-black uppercase tracking-widest px-8"
          >
            {t('common.close')}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
