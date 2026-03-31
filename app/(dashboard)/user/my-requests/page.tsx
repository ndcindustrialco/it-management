"use client";
import { useSearchParams } from "next/navigation";

import React, { useState, useEffect, Suspense } from "react";
import { Search, Loader2, Ticket, MessageSquare, Clock, Plus, BarChart2, ClipboardCheck, Link as LinkIcon, Check, User, FileDown, Eye } from "lucide-react";
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
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { ITRequestPDF } from "@/lib/pdf/ITRequestPDF";
import { PDFViewer } from "@react-pdf/renderer";

interface UserRequest {
  id: string;
  userId: string;
  request_code: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  reason: string;
  type_request?: string;
  createdAt: string;
  updatedAt: string;
  approval: string;
  approval_status: string;
  approval_comment?: string;
  approval_date?: string;
  it_approval?: string;
  it_approval_status?: string;
  it_approval_comment?: string;
  it_approval_date?: string;
  employee?: { 
    employee_name_th: string; 
    employee_code: string; 
    department: string; 
    position: string;
    supervisor_name?: string;
  };
  user?: { username: string; role?: string };
}

function RequestsContent() {
  const { data: session } = useSession();
  const { t, locale } = useTranslation();
  const searchParams = useSearchParams();
  const action = searchParams.get('action');
  const itemName = searchParams.get('item');

  const [requests, setRequests] = useState<UserRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [viewRequest, setViewRequest] = useState<UserRequest | null>(null);
  const [employees, setEmployees] = useState<any[]>([]);
  const [showSuccess, setShowSuccess] = useState<{ id: string, approvalNeeded: boolean } | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isExportingPDF, setIsExportingPDF] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<'ME' | 'ALL'>('ME');
  const [formError, setFormError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    description: "",
    reason: "",
    category: "GENERAL",
    priority: "LOW",
    type_request: "REPAIR",
    type_request_other: "",
    employeeId: (session?.user as any)?.employeeId || "",
    approval: ""
  });
  const [inventory, setInventory] = useState<any[]>([]);
  const [invSearch, setInvSearch] = useState("");

  useEffect(() => {
    if (session) {
      fetchMyRequests();
      fetchEmployees();
      fetchInventory();
      setFormData(prev => ({ ...prev, employeeId: (session.user as any).employeeId }));

      if (action === 'purchase') {
         setIsModalOpen(true);
         setFormData(prev => ({ 
            ...prev, 
            type_request: 'PURCHASE',
            description: itemName || "" 
         }));
      }
    }
  }, [session, action, itemName]);

  const fetchInventory = async () => {
    try {
      const res = await fetch("/api/equipment-lists");
      const data = await res.json();
      if (Array.isArray(data)) setInventory(data);
    } catch (error) {
      console.error("Fetch inventory error:", error);
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

  const fetchMyRequests = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/requests");
      const data = await res.json();
      if (Array.isArray(data)) setRequests(data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStandard && !formData.approval) {
      setFormError(locale === 'th' ? "กรุณาระบุผู้อนุมัติ (หัวหน้างาน/ผู้จัดการแผนก)" : "Please specify an approver (Manager).");
      return;
    }
    setFormError(null);
    setIsSaving(true);
    
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          approval_status: isStandard ? "APPROVED" : "PENDING",
          type_request: formData.type_request === "OTHER" ? formData.type_request_other : formData.type_request
        })
      });

      if (res.ok) {
        const data = await res.json();
        setIsModalOpen(false);
        setFormData({ ...formData, description: "", reason: "", approval: "", type_request: "REPAIR", type_request_other: "" });
        fetchMyRequests();
        setShowSuccess({ id: data.id, approvalNeeded: !!(formData.approval && !isStandard) });
      }
    } catch (error) {
      console.error("Save error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const copyApprovalLink = (id: string) => {
    const url = `${window.location.origin}/approve/${id}?t=r`;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleCancel = async (id: string) => {
    if (!confirm(t('requests.cancel_confirm'))) return;
    try {
      const res = await fetch(`/api/requests/${id}`, { method: "DELETE" });
      if (res.ok) {
        setViewRequest(null);
        fetchMyRequests();
      }
    } catch (error) {
      console.error("Cancel error:", error);
    }
  };

  const handleRegenerate = async (id: string) => {
    if (!confirm(t('requests.regen_confirm'))) return;
    try {
      const res = await fetch(`/api/requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          approval_status: "PENDING",
          approval_comment: "",
        })
      });
      if (res.ok) {
        setViewRequest(null);
        fetchMyRequests();
        alert(t('requests.regen_success'));
      }
    } catch (error) {
      console.error("Regenerate error:", error);
    }
  };

  const handleExportPDF = () => {
    if (!viewRequest) return;
    setIsPreviewModalOpen(true);
  };

   const isStandard = ["SUPPORT", "PASSWORD_ACCOUNT", "BORROW_ACC", "REPAIR"].includes(formData.type_request);

    const filteredRequests = requests.filter(r => filterType === 'ALL' || r.userId === (session?.user as any)?.id);

    const stats = {
      total: filteredRequests.length,
      pending: filteredRequests.filter(r => r.status === 'OPEN' || r.status === 'PENDING').length,
      resolved: filteredRequests.filter(r => r.status === 'RESOLVED' || r.status === 'CLOSED').length,
      reject: filteredRequests.filter(r => r.approval_status === "REJECTED").length
    };

   return (
    <div className="p-4 sm:p-6 space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-[#0F1059] tracking-tight uppercase">{t('requests.title')}</h1>
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mt-1">
            <span className="w-8 h-[2px] bg-primary/20"></span>
            {t('requests.subtitle')}
          </p>
        </div>
        <Button 
          onClick={() => setIsModalOpen(true)} 
          className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-[#0F1059] hover:bg-black text-white transition-all font-black text-[12px] uppercase tracking-[0.2em] active:scale-95 flex items-center justify-center gap-3"
        >
          <Plus className="h-5 w-5" />
          {t('requests.create_ticket')}
        </Button>
      </header>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
           <div className="flex items-center gap-2 bg-zinc-100/50 p-1.5 rounded-2xl border border-zinc-200/50 w-fit backdrop-blur-sm">
              {[
                { id: 'ME', label: t('common.me') },
                { id: 'ALL', label: t('common.all') }
              ].map((btn) => (
                <button 
                  key={btn.id}
                  onClick={() => setFilterType(btn.id as any)}
                  className={cn(
                    "px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300",
                    filterType === btn.id ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]" : "text-zinc-400 hover:text-zinc-600"
                  )}
                >
                  {btn.label}
                </button>
              ))}
           </div>
        </div>

    

      {/* Desktop Table View */}
      <Card className="rounded-[32px] border-none shadow-sm overflow-hidden hidden lg:block bg-white">
        <Table className="w-full">
          <TableHeader className="bg-zinc-50/50">
            <TableRow className="border-none">
              <TableHead className="px-8 py-6 text-[10px] font-black text-accent uppercase tracking-[0.2em]">{t('requests.problem_desc')}</TableHead>
              <TableHead className="px-8 py-6 text-[10px] font-black text-accent uppercase tracking-[0.2em]">{t('common.category')}</TableHead>
              <TableHead className="px-8 py-6 text-[10px] font-black text-accent uppercase tracking-[0.2em]">{t('common.priority')}</TableHead>
              <TableHead className="px-8 py-6 text-[10px] font-black text-accent uppercase tracking-[0.2em]">{t('common.date')}</TableHead>
              <TableHead className="px-8 py-6 text-[10px] font-black text-accent uppercase tracking-[0.2em]">{locale === 'th' ? 'สถานะ' : 'STATUS'}</TableHead>
              <TableHead className="px-8 py-6 text-[10px] font-black text-accent uppercase tracking-[0.2em] text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
               Array.from({ length: 5 }).map((_, i) => (
                 <TableRow key={i} className="border-zinc-50">
                   <TableCell colSpan={6} className="h-20 px-8">
                      <div className="h-8 w-full animate-pulse bg-zinc-50 rounded-xl" />
                   </TableCell>
                 </TableRow>
               ))
             ) : filteredRequests.length === 0 ? (
                <TableRow className="border-none">
                  <TableCell colSpan={6} className="px-8 py-32 text-center">
                     <div className="flex flex-col items-center gap-4 text-zinc-300">
                        <Ticket className="h-16 w-16 stroke-1" />
                        <p className="text-xs font-black uppercase tracking-[0.3em] italic">
                           {filterType === 'ME' ? t('requests.no_tickets_me') : t('requests.no_tickets_all')}
                        </p>
                     </div>
                  </TableCell>
                </TableRow>
             ) : filteredRequests.map((req: any) => (
              <TableRow key={req.id} className="hover:bg-zinc-50/50 transition-all group border-zinc-50">
                <TableCell className="px-8 py-6">
                   <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-black text-primary bg-primary/5 px-2 py-0.5 rounded-lg w-fit italic tracking-widest">{req.request_code || 'RQ-N/A'}</span>
                      <div className="font-bold text-primary text-[14px] leading-tight line-clamp-1">{req.description}</div>
                   </div>
                </TableCell>
                <TableCell className="px-8">
                   <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-bold text-zinc-700 uppercase tracking-tight">
                        {req.category === "HARDWARE" ? t('categories.hardware') :
                        req.category === "SOFTWARE" ? t('categories.software') :
                        req.category === "NETWORK" ? t('categories.network') :
                        req.category === "GENERAL" ? t('categories.general') : req.category}
                    </span>
                    <span className="text-[9px] font-medium text-accent uppercase">{req.type_request || 'N/A'}</span>
                   </div>
                </TableCell>
                <TableCell className="px-8">
                  <div className={cn(
                    "w-fit rounded-full px-3 py-1 ring-1",
                    req.priority === "URGENT" ? "text-rose-600 bg-rose-50 ring-rose-200" : 
                    req.priority === "HIGH" ? "text-orange-600 bg-orange-50 ring-orange-200" :
                    req.priority === "MEDIUM" ? "text-amber-600 bg-amber-50 ring-amber-200" :
                    "text-zinc-400 bg-zinc-50 ring-zinc-200"
                  )}>
                    <span className="text-[9px] font-black uppercase tracking-widest">
                       {req.priority === "URGENT" ? t('priorities.urgent') :
                        req.priority === "HIGH" ? t('priorities.high') :
                        req.priority === "MEDIUM" ? t('priorities.medium') :
                        req.priority === "LOW" ? t('priorities.low') : req.priority}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-8">
                   <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-zinc-700">{new Date(req.createdAt).toLocaleDateString('en-GB')}</span>
                      <span className="text-[9px] font-medium text-accent">{new Date(req.createdAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
                   </div>
                </TableCell>
               <TableCell className="px-8">
                  <div className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-xl w-fit",
                    req.status === "RESOLVED" || req.status === "CLOSED" ? "bg-emerald-50 text-emerald-600" :
                    req.status === "IN_PROGRESS" ? "bg-amber-50 text-amber-600" :
                    "bg-zinc-50 text-zinc-500"
                  )}>
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full animate-pulse",
                      req.status === "RESOLVED" || req.status === "CLOSED" ? "bg-emerald-500" :
                      req.status === "IN_PROGRESS" ? "bg-amber-500" : "bg-zinc-400"
                    )} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{req.status || 'PENDING'}</span>
                  </div>
                </TableCell>
                <TableCell className="px-8 text-right">
                   <Button 
                      variant="ghost"
                      onClick={() => setViewRequest(req)}
                      className="h-10 w-10 p-0 rounded-xl hover:bg-primary/5 hover:text-primary transition-all opacity-0 group-hover:opacity-100"
                   >
                       <Eye className="h-5 w-5" />
                   </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Mobile Card View */}
      <div className="grid grid-cols-1 gap-5 lg:hidden pb-10">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
             <div key={i} className="h-48 w-full bg-white rounded-xl animate-pulse shadow-sm" />
          ))
        ) : filteredRequests.length === 0 ? (
          <div className="py-24 text-center">
             <Ticket className="h-16 w-16 text-zinc-100 mx-auto mb-4" />
             <p className="text-[10px] font-black uppercase text-accent tracking-[0.3em]">{t('requests.no_tickets_me')}</p>
          </div>
        ) : filteredRequests.map((req: any) => (
          <Card 
            key={req.id} 
            onClick={() => setViewRequest(req)}
            className="p-6 rounded-xl bg-white border-none shadow-sm active:scale-95 transition-all duration-300 relative overflow-hidden"
          >
             <div className="flex flex-col gap-5">
                <div className="flex items-start justify-between">
                   <div className="space-y-1">
                      <span className="text-[10px] font-black text-primary bg-primary/5 px-2.5 py-1 rounded-lg italic tracking-widest">{req.request_code || 'RQ-N/A'}</span>
                      <h3 className="font-black text-lg text-primary leading-tight line-clamp-2 pr-4 pt-1 uppercase tracking-tight">{req.description}</h3>
                   </div>
                   <div className={cn(
                    "px-3 py-1.5 rounded-xl flex items-center justify-center shrink-0 border border-zinc-50 shadow-sm",
                    req.status === "RESOLVED" || req.status === "CLOSED" ? "bg-emerald-50 text-emerald-600" :
                    req.status === "IN_PROGRESS" ? "bg-amber-50 text-amber-600" :
                    "bg-zinc-50 text-zinc-500"
                   )}>
                      <span className="text-[9px] font-black uppercase tracking-wider">{req.status || 'OPEN'}</span>
                   </div>
                </div>

                <div className="flex items-center gap-3">
                   <div className={cn(
                      "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ring-1",
                      req.priority === "URGENT" ? "bg-rose-50 text-rose-600 ring-rose-100" :
                      req.priority === "HIGH" ? "bg-orange-50 text-orange-600 ring-orange-100" :
                      req.priority === "MEDIUM" ? "bg-amber-50 text-amber-600 ring-amber-100" : "bg-zinc-50 text-zinc-400 ring-zinc-100"
                   )}>
                      {req.priority || 'LOW'}
                   </div>
                   <div className="h-1 w-1 rounded-full bg-zinc-200" />
                   <div className="text-[10px] font-bold text-accent uppercase tracking-tighter">
                      {req.category || 'GENERAL'}
                   </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-50">
                   <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-accent" />
                       </div>
                       <div>
                          <p className="text-[9px] font-black text-accent uppercase tracking-widest">{locale === 'th' ? 'วันที่ส่ง' : 'SUBMITTED'}</p>
                          <p className="text-[11px] font-bold text-primary">{new Date(req.createdAt).toLocaleDateString('en-GB')}</p>
                       </div>
                   </div>
                   <Button variant="ghost" className="h-10 w-10 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all p-0">
                      <Eye className="h-5 w-5" />
                   </Button>
                </div>
             </div>
          </Card>
        ))}
      </div>
      </div>


      <Modal 
        isOpen={!!viewRequest} 
        onClose={() => setViewRequest(null)} 
        title={t('requests.ticket_details')}
      >
        <div className="space-y-6">
           {/* Request Code & Header */}
           <div className="p-5 rounded-3xl bg-zinc-50 border border-zinc-100 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{locale === 'th' ? 'ข้อมูลคำร้อง' : 'Request Info'}</span>
                <span className="font-black text-[11px] text-[#0F1059] bg-[#0F1059]/8 px-2.5 py-1 rounded-lg tracking-widest">
                  {viewRequest?.request_code || 'N/A'}
                </span>
              </div>
              <div className="space-y-1">
                 <p className="text-[12px] font-black text-zinc-400 uppercase tracking-widest">{t('requests.problem_desc')}</p>
                 <p className="text-sm font-bold text-[#0F1059] leading-relaxed">{viewRequest?.description}</p>
              </div>
              
              <div className="space-y-1">
                 <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{t('requests.reason_urgency')}</p>
                 <p className="text-[14px] font-medium text-zinc-600 leading-relaxed font-sans">{viewRequest?.reason || t('requests.no_info')}</p>
              </div>

              {/* Timestamps & System User Info */}
              <div className="pt-3 border-t border-zinc-100 grid grid-cols-2 gap-3">
                 <div>
                   <p className="text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-0.5">{locale === 'th' ? 'วันที่สร้าง' : 'Created At'}</p>
                   <p className="text-[11px] font-bold text-zinc-700">{viewRequest?.createdAt ? new Date(viewRequest.createdAt).toLocaleString(locale === 'th' ? 'th-TH' : 'en-GB') : '-'}</p>
                 </div>
                 <div>
                   <p className="text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-0.5">{locale === 'th' ? 'อัพเดตล่าสุด' : 'Updated At'}</p>
                   <p className="text-[11px] font-semibold text-zinc-600">{viewRequest?.updatedAt ? new Date(viewRequest.updatedAt).toLocaleString(locale === 'th' ? 'th-TH' : 'en-GB') : '-'}</p>
                 </div>
                 {viewRequest?.user && (
                   <div className="col-span-2">
                     <p className="text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-0.5">{locale === 'th' ? 'ผู้ใช้ระบบ' : 'System User'}</p>
                     <p className="text-[11px] font-semibold text-zinc-600">{viewRequest.user.username}</p>
                   </div>
                 )}
              </div>

              {/* Employee Info */}
              {viewRequest?.employee && (
                <div className="pt-3 border-t border-zinc-100 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-0.5">{locale === 'th' ? 'ชื่อพนักงาน' : 'Employee'}</p>
                    <p className="text-[11px] font-bold text-zinc-700">{viewRequest.employee.employee_name_th}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-0.5">{locale === 'th' ? 'แผนก' : 'Department'}</p>
                    <p className="text-[11px] font-semibold text-zinc-600">{viewRequest.employee.department || '-'}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-0.5">{locale === 'th' ? 'ตำแหน่ง' : 'Position'}</p>
                    <p className="text-[11px] font-semibold text-zinc-600">{viewRequest.employee.position || '-'}</p>
                  </div>
                  {viewRequest.employee.supervisor_name && (
                    <div>
                      <p className="text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-0.5">{locale === 'th' ? 'หัวหน้างาน' : 'Supervisor'}</p>
                      <p className="text-[11px] font-semibold text-zinc-600">{viewRequest.employee.supervisor_name}</p>
                    </div>
                  )}
                </div>
              )}
           </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl border border-zinc-100 bg-white">
                 <p className="text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">{t('common.category')}</p>
                 <Badge variant="secondary" className="rounded-lg text-[10px] font-bold uppercase">
                    {viewRequest?.category === "HARDWARE" ? t('categories.hardware') :
                     viewRequest?.category === "SOFTWARE" ? t('categories.software') :
                     viewRequest?.category === "NETWORK" ? t('categories.network') :
                     viewRequest?.category === "GENERAL" ? t('categories.general') : viewRequest?.category}
                 </Badge>
              </div>
              <div className="p-4 rounded-2xl border border-zinc-100 bg-white">
                 <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">{t('common.priority')}</p>
                 <Badge className={cn(
                    "rounded-lg px-2 py-0.5 text-[10px] font-black uppercase tracking-widest border-none text-white",
                    viewRequest?.priority === "URGENT" ? "bg-red-700" :
                    viewRequest?.priority === "HIGH" ? "bg-rose-500" :
                    viewRequest?.priority === "MEDIUM" ? "bg-amber-500" : "bg-zinc-400"
                 )}>
                    {viewRequest?.priority === "URGENT" ? t('priorities.urgent') :
                     viewRequest?.priority === "HIGH" ? t('priorities.high') :
                     viewRequest?.priority === "MEDIUM" ? t('priorities.medium') :
                     viewRequest?.priority === "LOW" ? t('priorities.low') : viewRequest?.priority}
                 </Badge>
              </div>
              <div className="p-4 rounded-2xl border border-zinc-100 bg-white">
                 <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">{t('requests.request_type')}</p>
                 <Badge variant="outline" className="rounded-lg text-[9px] font-black uppercase tracking-wide px-2 py-0.5 border-violet-200 text-violet-600 bg-violet-50">
                    {viewRequest?.type_request || '-'}
                 </Badge>
              </div>
           </div>

           {/* Final Status */}
           <div className="p-4 rounded-2xl bg-zinc-800 text-white flex justify-between items-center">
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">{locale === 'th' ? 'สถานะงาน' : 'Ticket Status'}</span>
                <Badge className={cn(
                   "border-none rounded-lg text-[10px] font-black uppercase tracking-widest px-3 py-1",
                   viewRequest?.status === "RESOLVED" || viewRequest?.status === "CLOSED" ? "bg-emerald-500 text-white" :
                   viewRequest?.status === "IN_PROGRESS" ? "bg-amber-500 text-white" : "bg-white/20 text-white"
                )}>
                   {viewRequest?.status || 'OPEN'}
                </Badge>
            </div>

           {/* Dept Approval Status */}
           <div className="p-4 rounded-2xl bg-[#0F1059] text-white flex justify-between items-center">
                <div>
                  <span className="text-[13px] font-black uppercase tracking-[0.2em]">{t('requests.approval_status')}</span>
                  {viewRequest?.approval_date && (
                    <p className="text-[9px] text-white/50 mt-0.5">{locale === 'th' ? 'วันที่: ' : 'Date: '}{new Date(viewRequest.approval_date).toLocaleDateString('en-GB')}</p>
                  )}
                </div>
                <Badge className={cn(
                   "border-none rounded-lg text-[10px] font-black uppercase tracking-widest px-3 py-1",
                   viewRequest?.approval_status === "APPROVED" ? "bg-emerald-500 text-white" :
                   viewRequest?.approval_status === "REJECTED" ? "bg-rose-500 text-white" : "bg-white/20 text-white"
                )}>
                   {viewRequest?.approval_status || 'PENDING'}
                </Badge>
            </div>

           {/* Dept Approval Comment */}
           {viewRequest?.approval_comment && (
             <div className="px-4 py-3 rounded-2xl bg-amber-50 border border-amber-100">
               <p className="text-[9px] font-black text-amber-500 uppercase tracking-widest mb-1">{locale === 'th' ? 'ความเห็นผู้อนุมัติแผนก' : 'Dept Comment'}</p>
               <p className="text-xs text-zinc-600 font-medium">{viewRequest.approval_comment}</p>
             </div>
           )}

           {/* IT Approval Status */}
           <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex justify-between items-center">
                <div>
                  <span className="text-[11px] font-black text-zinc-700 uppercase tracking-[0.15em]">{locale === 'th' ? 'อนุมัติ IT' : 'IT Approval'}</span>
                  {viewRequest?.it_approval && <p className="text-[9px] text-zinc-400 mt-0.5">By: {viewRequest.it_approval}</p>}
                  {viewRequest?.it_approval_date && (
                    <p className="text-[9px] text-zinc-400">{locale === 'th' ? 'วันที่: ' : 'Date: '}{new Date(viewRequest.it_approval_date).toLocaleDateString('en-GB')}</p>
                  )}
                </div>
                <Badge className={cn(
                   "border-none rounded-lg text-[10px] font-black uppercase tracking-widest px-3 py-1",
                   viewRequest?.it_approval_status === "APPROVED" ? "bg-[#0F1059] text-white" :
                   viewRequest?.it_approval_status === "REJECTED" ? "bg-rose-500 text-white" : "bg-zinc-200 text-zinc-500"
                )}>
                   {viewRequest?.it_approval_status || 'PENDING'}
                </Badge>
            </div>

           {/* IT Approval Comment */}
           {viewRequest?.it_approval_comment && (
             <div className="px-4 py-3 rounded-2xl bg-[#0F1059]/5 border border-[#0F1059]/10">
               <p className="text-[9px] font-black text-[#0F1059]/60 uppercase tracking-widest mb-1">{locale === 'th' ? 'ความเห็น IT' : 'IT Comment'}</p>
               <p className="text-xs text-zinc-600 font-medium">{viewRequest.it_approval_comment}</p>
             </div>
           )}

             {viewRequest?.approval && (viewRequest.userId === (session?.user as any)?.id || (session?.user as any)?.role === 'admin') && (
               <div className="space-y-3 animate-in fade-in duration-500">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">{t('requests.approved_by')}: <span className="text-[#0F1059] font-black">{viewRequest.approval}</span></p>
                 <div className="flex gap-2">
                    <Button 
                       onClick={() => copyApprovalLink(viewRequest.id)}
                       className="flex-1 h-12 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#0F1059] text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2"
                    >
                       <LinkIcon className="h-3.5 w-3.5" /> {t('common.copy_link')}
                    </Button>
                    {viewRequest.approval_status !== 'PENDING' && (
                       <Button 
                          onClick={() => handleRegenerate(viewRequest.id)}
                          className="flex-1 h-12 rounded-xl bg-[#0F1059]/5 hover:bg-[#0F1059]/10 text-[#0F1059] text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2"
                       >
                          <Plus className="h-3.5 w-3.5" /> {t('common.generate_new')}
                       </Button>
                    )}
                 </div>
               </div>
            )}
           
           <div className="flex flex-wrap gap-3">
              <Button 
                   onClick={() => setViewRequest(null)}
                   className="flex-1 min-w-[120px] h-12 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-[13px] font-black uppercase tracking-widest"
              >
                   {t('common.close')}
              </Button>
              <Button 
                   onClick={handleExportPDF}
                   disabled={isExportingPDF}
                   className="flex-1 min-w-[120px] h-12 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-100 text-[11px] font-black uppercase tracking-widest"
              >
                  {isExportingPDF ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Eye className="h-4 w-4 mr-2" /> {t('common.preview_pdf')}</>}
              </Button>
               {(viewRequest?.status === 'OPEN' || viewRequest?.status === 'PENDING') && (viewRequest.userId === (session?.user as any)?.id || (session?.user as any)?.role === 'admin') && (
                  <Button 
                       onClick={() => handleCancel(viewRequest?.id!)}
                       className="flex-1 min-w-[150px] h-12 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-[11px] font-black uppercase tracking-widest"
                  >
                       {t('requests.cancel_request')}
                  </Button>
               )}
           </div>
        </div>
      </Modal>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={t('requests.new_ticket_title')}
      >
        <form onSubmit={handleCreate} className="space-y-6">
            <div className="space-y-4">
               <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('requests.request_type')}</label>
                  <select 
                     required
                     className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#0F1059]/20 transition-all font-sans"
                     value={formData.type_request}
                     onChange={(e) => {
                        const val = e.target.value;
                        setFormData({...formData, type_request: val});
                     }}
                  >
                     <optgroup label={t('requests.standard_request_group')}>
                        <option value="SUPPORT">{t('types.support')}</option>
                        <option value="PASSWORD_ACCOUNT">{t('types.password_reset')}</option>
                        <option value="BORROW_ACC">{t('types.borrow_acc')}</option>
                        <option value="REPAIR">{t('types.repair')}</option>
                     </optgroup>
                     <optgroup label={t('requests.requires_approval_group')}>
                        <option value="PURCHASE">{t('types.purchase')}</option>
                        <option value="LICENSE">{t('types.license')}</option>
                        <option value="ACCESS">{t('types.access')}</option>
                        <option value="CHANGE">{t('types.change')}</option>
                     </optgroup>
                     <optgroup label={t('types.other')}>
                        <option value="OTHER">{t('types.other')}</option>
                     </optgroup>
                  </select>
                  
                  {formData.type_request !== "" && (
                     <div className={cn(
                        "mt-2 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300",
                        isStandard
                           ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                           : "bg-amber-50 text-amber-600 border border-amber-100"
                     )}>
                        {isStandard ? (
                           <><Check className="h-3 w-3" /> {t('requests.standard_indicator')}</>
                        ) : (
                           <><Clock className="h-3 w-3" /> {t('requests.approval_required_indicator')}</>
                        )}
                     </div>
                  )}
               </div>

               {formData.type_request === "OTHER" && (
                  <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-200">
                      <label className="text-[11px] font-black text-[#0F1059] uppercase tracking-widest">{t('requests.please_specify')}</label>
                     <input 
                        required
                        className="w-full bg-zinc-50 border border-[#0F1059]/30 rounded-xl px-4 py-3 text-sm font-medium outline-none"
                        placeholder={t('requests.please_specify') + "..."}
                        value={formData.type_request_other}
                        onChange={(e) => setFormData({...formData, type_request_other: e.target.value})}
                     />
                  </div>
               )}

               <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">
                     {formData.type_request === "PURCHASE" ? t('requests.purchase_items') : t('requests.problem_desc')}
                  </label>
                  
                  {formData.type_request === "PURCHASE" && (
                     <div className="mb-4 p-4 rounded-2xl bg-[#0F1059]/5 border border-[#0F1059]/10 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="flex items-center justify-between">
                           <p className="text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{t('requests.check_stock')}</p>
                        </div>
                        <div className="relative">
                           <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                           <input 
                              className="w-full bg-white border border-zinc-100 rounded-xl pl-9 pr-4 py-2.5 text-[11px] font-bold uppercase outline-none focus:ring-2 focus:ring-[#0F1059]/5"
                              placeholder={t('requests.search_available')}
                              value={invSearch}
                              onChange={(e) => setInvSearch(e.target.value)}
                           />
                        </div>
                        
                        {invSearch.length > 0 && (
                           <div className="space-y-1.5 max-h-[150px] overflow-y-auto custom-scrollbar pr-2">
                              {inventory
                                .filter(item => {
                                   const s = invSearch.toLowerCase();
                                   return (item.equipmentEntry?.list || "").toLowerCase().includes(s) || 
                                          (item.equipmentEntry?.brand_name || "").toLowerCase().includes(s);
                                })
                                .slice(0, 5)
                                .map(item => (
                                   <button
                                      key={item.id}
                                      type="button"
                                      onClick={() => {
                                         setFormData({ ...formData, description:`${item.equipmentEntry?.list} [${item.equipmentEntry?.brand_name}]` });
                                         setInvSearch("");
                                      }}
                                      className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-[#0F1059] hover:text-white border border-zinc-50 transition-all text-left group"
                                   >
                                      <div className="min-w-0 flex-1">
                                         <p className="text-[10px] font-black truncate">{item.equipmentEntry?.list}</p>
                                         <p className="text-[8px] font-bold opacity-60 uppercase">{item.equipmentEntry?.brand_name} • {t('inventory.stock_count')}: {item.remaining}</p>
                                      </div>
                                      <Plus className="h-3 w-3 opacity-0 group-hover:opacity-100" />
                                   </button>
                                ))
                              }
                           </div>
                        )}
                     </div>
                  )}

                  <textarea 
                     required
                     className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none min-h-[80px] focus:border-[#0F1059]/20 transition-all font-sans"
                     placeholder={formData.type_request === "PURCHASE" ? t('requests.specify_details') : t('requests.fault_details')}
                     value={formData.description}
                     onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
               </div>
               
               <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('requests.reason_urgency')}</label>
                  <textarea 
                     className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none min-h-[80px] focus:border-[#0F1059]/20 transition-all font-sans"
                     placeholder={t('requests.urgent_reason')}
                     value={formData.reason}
                     onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  />
               </div>
            </div>

               <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-[#0F1059] uppercase tracking-widest">{t('requests.requestor')}</label>
                  <select 
                     required
                     disabled
                     className="w-full border bg-black/10 border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium outline-none appearance-none cursor-not-allowed transition-all shadow-sm font-sans"
                     value={formData.employeeId}
                     onChange={(e) => setFormData({...formData, employeeId: e.target.value})}
                  >
                     <option value="">{t('requests.select_employee')}</option>
                     {employees.map(emp => (
                        <option key={emp.id} value={emp.id}>{emp.employee_name_th} ({emp.employee_code})</option>
                     ))}
                  </select>
               </div>

               {!isStandard && (
                  <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-300">
                     <label className="text-[11px] font-black text-[#0F1059] uppercase tracking-widest">{t('requests.approver')}</label>
                   <select 
                      className={cn(
                        "w-full bg-zinc-50 border rounded-xl px-4 py-3 text-sm font-medium outline-none appearance-none cursor-pointer transition-all shadow-sm font-sans",
                        formError ? "border-rose-500 bg-rose-50" : "border-zinc-200 hover:border-[#0F1059]/30"
                      )}
                      value={formData.approval}
                      onChange={(e) => {
                        setFormData({...formData, approval: e.target.value});
                        if (e.target.value) setFormError(null);
                      }}
                   >
                      <option value="">{t('requests.no_approval_option')}</option>
                      {employees.map(emp => (
                        <option key={emp.id} value={emp.employee_name_th}>{emp.employee_name_th}</option>
                      ))}
                   </select>
                   {formError && <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mt-1">! {formError}</p>}
                   <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">* {t('requests.supervisor_needed_hint')}</p>
                </div>
               )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('common.category')}</label>
                  <select 
                     className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none cursor-pointer focus:border-[#0F1059]/20 font-sans"
                     value={formData.category}
                     onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                     <option value="HARDWARE">{t('categories.hardware')}</option>
                     <option value="SOFTWARE">{t('categories.software')}</option>
                     <option value="NETWORK">{t('categories.network')}</option>
                     <option value="GENERAL">{t('categories.general')}</option>
                  </select>
               </div>
               <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('common.priority')}</label>
                  <select 
                     className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none cursor-pointer focus:border-[#0F1059]/20 font-sans"
                     value={formData.priority}
                     onChange={(e) => setFormData({...formData, priority: e.target.value})}
                  >
                     <option value="LOW">{t('priorities.low')}</option>
                     <option value="MEDIUM">{t('priorities.medium')}</option>
                     <option value="HIGH">{t('priorities.high')}</option>
                     <option value="URGENT">{t('priorities.urgent')}</option>
                  </select>
               </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-zinc-50">
               <Button 
                 type="submit" 
                 disabled={isSaving}
                 className="flex-1 h-12 rounded-xl bg-[#0F1059] hover:bg-black text-white text-[11px] font-black uppercase tracking-widest transition-all"
               >
                  {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : t('common.submit')}
               </Button>
            </div>
        </form>
      </Modal>

      {/* Success Modal */}
      <Modal 
        isOpen={!!showSuccess} 
        onClose={() => setShowSuccess(null)} 
        title={t('requests.success_title')}
      >
        <div className="flex flex-col items-center text-center space-y-6 pt-4">
           <div className="h-20 w-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center ring-8 ring-emerald-50/50">
              <ClipboardCheck className="h-10 w-10" />
           </div>
           
           <div className="space-y-2">
              <h3 className="text-xl font-black text-[#0F1059] uppercase tracking-tight">{locale === 'th' ? 'บันทึกข้อมูลสำเร็จ!' : 'Success!'}</h3>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">
                 {showSuccess?.approvalNeeded 
                    ? t('requests.success_msg_approval')
                    : t('requests.success_msg_no_approval')}
              </p>
           </div>

           {showSuccess?.approvalNeeded && (
             <div className="w-full p-4 rounded-2xl bg-[#0F1059]/5 border border-[#0F1059]/10 space-y-3">
                <p className="text-[10px] font-black text-[#0F1059] uppercase tracking-[0.25em] text-left ml-1">{t('requests.approval_link')}</p>
                <div className="flex gap-2">
                   <div className="flex-1 h-12 bg-white rounded-xl border flex items-center px-4 overflow-hidden border-[#0F1059]/10">
                      <span className="text-[10px] text-zinc-400 truncate font-mono">
                         {typeof window !== 'undefined' ? `${window.location.origin}/approve/${showSuccess.id}?t=r` : ''}
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
          {viewRequest && (
            <PDFViewer width="100%" height="100%" showToolbar={true}>
              <ITRequestPDF data={viewRequest} locale={locale} />
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

function TickPlus({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Ticket className="h-4 w-4" />
      <Plus className="h-2.5 w-2.5 absolute -top-1 -right-1" />
    </div>
  )
}
export default function MyRequestsPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><Loader2 className="h-8 w-8 animate-spin text-[#0F1059]" /></div>}>
      <RequestsContent />
    </Suspense>
  );
}
