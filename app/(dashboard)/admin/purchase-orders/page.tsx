"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Loader2, ShoppingCart, Plus, Edit2, Trash2, Image as ImageIcon, Upload, ChevronUp, ChevronDown, FileSpreadsheet } from "lucide-react";
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
import { exportToExcel } from "@/lib/export-utils";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { EmployeeSearchSelect } from "@/components/employee-search-select";
import { useSession } from "next-auth/react";

interface PO {
  id: string;
  po_code: string;
  list: string;
  detail?: string;
  quantity: number;
  reason_order?: string;
  picture?: string;
  buyer?: string;
  reviewer?: string;
  approver?: string;
  date_order?: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Employee {
  id: string;
  employee_name_th: string;
  employee_code: string;
  department?: string;
  position?: string;
}

export default function PurchaseOrdersPage() {
  const { t, locale } = useTranslation();
  const [orders, setOrders] = useState<PO[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<PO | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filters & Sorting logic states
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [sortConfig, setSortConfig] = useState<{ key: keyof PO; direction: 'asc' | 'desc' }>({
    key: 'po_code',
    direction: 'desc'
  });

  const { data: session } = useSession();
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportDateStart, setExportDateStart] = useState("");
  const [exportDateEnd, setExportDateEnd] = useState("");

  // Form
  const [formData, setFormData] = useState({
    list: "",
    detail: "",
    quantity: 1,
    reason_order: "",
    picture: "",
    buyer: "",
    reviewer: "",
    approver: "",
    status: "PENDING",
    date_order: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    fetchOrders();
    fetchEmployees();
  }, []);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/equipment-purchase-orders");
      const data = await res.json();
      if (Array.isArray(data)) setOrders(data);
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

  const handleSort = (key: keyof PO) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredOrders = orders
    .filter(order => {
      const searchLow = search.toLowerCase();
      const matchesSearch = order.list.toLowerCase().includes(searchLow) ||
        (order.buyer || "").toLowerCase().includes(searchLow);

      const matchesStatus = filterStatus === "ALL" || order.status === filterStatus;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const aValue = (a as any)[sortConfig.key] || "";
      const bValue = (b as any)[sortConfig.key] || "";

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

  const handleExportExcel = () => {
    setIsExportModalOpen(true);
  };

  const processExport = async () => {
    let dataToExport = filteredOrders;

    if (exportDateStart || exportDateEnd) {
      dataToExport = dataToExport.filter(o => {
        const date = o.date_order ? new Date(o.date_order) : new Date();
        const start = exportDateStart ? new Date(exportDateStart) : null;
        const end = exportDateEnd ? new Date(exportDateEnd) : null;

        if (start && date < start) return false;
        if (end) {
          const endAdjusted = new Date(end);
          endAdjusted.setHours(23, 59, 59);
          if (date > endAdjusted) return false;
        }
        return true;
      });
    }

    if (dataToExport.length === 0) {
      alert("No data to export for the selected criteria.");
      return;
    }

    const worksheetData = dataToExport.map(o => ({
      "ID": o.id,
      "Order Date": o.date_order ? new Date(o.date_order).toLocaleDateString('en-GB') : '-',
      "Item": o.list,
      "Detail": o.detail,
      "Quantity": o.quantity,
      "Status": o.status,
      "Buyer": o.buyer,
      "Reviewer": o.reviewer,
      "Approver": o.approver,
      "Reason": o.reason_order
    }));

    await exportToExcel(worksheetData, `Purchase_Orders_${new Date().toISOString().split('T')[0]}`, "Orders");
    setIsExportModalOpen(false);
  };

  const openModal = (order: PO | null = null) => {
    if (order) {
      setSelectedOrder(order);
      setFormData({
        list: order.list || "",
        detail: order.detail || "",
        quantity: order.quantity || 1,
        reason_order: order.reason_order || "",
        picture: order.picture || "",
        buyer: order.buyer || "",
        reviewer: order.reviewer || "",
        approver: order.approver || "",
        status: order.status || "PENDING",
        date_order: order.date_order ? order.date_order.split('T')[0] : ""
      });
    } else {
      setSelectedOrder(null);
      setFormData({
        list: "",
        detail: "",
        quantity: 1,
        reason_order: "",
        picture: "",
        buyer: session?.user?.name || "",
        reviewer: "",
        approver: "",
        status: "PENDING",
        date_order: new Date().toISOString().split('T')[0]
      });
    }
    setIsModalOpen(true);
  };

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    try {
      const response = await fetch(`/api/upload?filename=${encodeURIComponent(file.name || 'image.png')}`, {
        method: "POST",
        body: file,
      });

      if (response.ok) {
        const blob = await response.json();
        setFormData((prev) => ({ ...prev, picture: blob.url }));
      } else {
        const error = await response.json();
        alert(error.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred while uploading. Please try again.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) await uploadFile(file);
  };

  const removePicture = () => {
    setFormData((prev) => ({ ...prev, picture: "" }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const url = selectedOrder
        ? `/api/equipment-purchase-orders/${selectedOrder.id}`
        : "/api/equipment-purchase-orders";
      const method = selectedOrder ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchOrders();
      }
    } catch (error) {
      console.error("Save error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t('common.confirm_delete'))) return;
    try {
      const res = await fetch(`/api/equipment-purchase-orders/${id}`, { method: "DELETE" });
      if (res.ok) fetchOrders();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 w-full animate-in fade-in duration-700">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-[#0F1059] tracking-tighter uppercase leading-none flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-[#0F1059] flex items-center justify-center text-white border border-[#0F1059]/10">
              <ShoppingCart className="h-6 w-6" />
            </div>
            {t('po.title')}
          </h1>
          <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-widest mt-2">{t('po.subtitle')}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => handleExportExcel()}
            variant="outline"
            className="rounded-2xl border-zinc-200 hover:border-[#0F1059] hover:text-[#0F1059] py-6 px-6 font-black uppercase tracking-widest text-[11px] transition-all h-14"
          >
            <FileSpreadsheet className="mr-2 h-4 w-4 text-emerald-600" /> {t('admin_tickets.export_excel')}
          </Button>
          <Button
            onClick={() => openModal()}
            className="rounded-2xl h-14 px-8 bg-[#0F1059] hover:bg-black text-white transition-all text-[11px] font-black uppercase tracking-widest shadow-xl shadow-[#0F1059]/10"
          >
            <Plus className="mr-2 h-4 w-4" /> {t('po.add_new')}
          </Button>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center p-4 rounded-3xl border border-zinc-100 bg-white/50 shadow-sm font-sans">
        <div className="flex items-center gap-3 px-4 py-2 bg-zinc-50 rounded-2xl border border-zinc-100 group focus-within:border-[#0F1059]/30 transition-all lg:col-span-3">
          <Search className="h-4 w-4 text-zinc-400 group-focus-within:text-[#0F1059]" />
          <input
            className="bg-transparent border-none outline-none text-[10px] font-black uppercase w-full"
            placeholder={t('po.search_placeholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-2.5 text-[10px] font-black uppercase outline-none text-zinc-600 focus:border-[#0F1059]/30 font-sans"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="ALL">{t('po.all_status')}</option>
          <option value="PENDING">PENDING / {t('po.pending')}</option>
          <option value="ORDERED">ORDERED / {t('po.ordered')}</option>
          <option value="RECEIVED">RECEIVED / {t('po.received')}</option>
          <option value="CANCELLED">CANCELLED / {t('po.cancelled')}</option>
        </select>
      </div>

      <Card className="rounded-[40px] border-zinc-100 overflow-hidden bg-white/90">
        <div className="overflow-x-auto">
          <Table className="w-full text-left font-sans">
            <TableHeader className="bg-zinc-50/50">
              <TableRow className="border-none">
                <TableHead className="px-6 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest w-24">{t('po.media')}</TableHead>
                <TableHead
                  className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest cursor-pointer hover:bg-zinc-100 transition-colors"
                  onClick={() => handleSort('po_code')}
                >
                  <div className="flex items-center gap-1">
                    {t('po.code') || 'CODE'}
                    {sortConfig.key === 'po_code' && (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
                  </div>
                </TableHead>
                <TableHead
                  className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest cursor-pointer hover:bg-zinc-100 transition-colors"
                  onClick={() => handleSort('list')}
                >
                  <div className="flex items-center gap-1">
                    {t('po.order_details')}
                    {sortConfig.key === 'list' && (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
                  </div>
                </TableHead>
                <TableHead
                  className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest cursor-pointer hover:bg-zinc-100 transition-colors"
                  onClick={() => handleSort('quantity')}
                >
                  <div className="flex items-center gap-1">
                    {t('po.quantity')}
                    {sortConfig.key === 'quantity' && (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
                  </div>
                </TableHead>
                <TableHead
                  className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest cursor-pointer hover:bg-zinc-100 transition-colors"
                  onClick={() => handleSort('date_order')}
                >
                  <div className="flex items-center gap-1">
                    {t('po.order_date')}
                    {sortConfig.key === 'date_order' && (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
                  </div>
                </TableHead>
                <TableHead className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{t('po.buyer')}</TableHead>
                <TableHead className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{locale === 'th' ? 'ผู้ตรวจสอบ' : 'REVIEWER'}</TableHead>
                <TableHead className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{locale === 'th' ? 'ผู้อนุมัติ' : 'APPROVER'}</TableHead>
                <TableHead className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{t('common.status')}</TableHead>
                <TableHead className="p-0"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-zinc-100">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell colSpan={10} className="h-24 animate-pulse bg-zinc-50/20" />
                  </TableRow>
                ))
              ) : filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={10} className="px-6 py-20 text-center text-zinc-400 italic font-bold uppercase tracking-widest">
                    {t('po.no_pos_found')}
                  </TableCell>
                </TableRow>
              ) : filteredOrders.map((order) => (
                <TableRow key={order.id} className="hover:bg-zinc-50/50 transition-colors group">
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    {order.picture ? (
                      <div className="w-14 h-14 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
                        <img
                          src={order.picture}
                          alt={order.list}
                          className="w-full h-full object-cover cursor-pointer hover:scale-125 transition-transform duration-700"
                          onClick={() => window.open(order.picture, '_blank')}
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center border border-dashed border-zinc-200 text-zinc-300">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                    <Badge variant="outline" className="text-[9px] font-black uppercase px-2 py-1 border-zinc-200 text-[#0F1059] bg-[#0F1059]/5">
                      {order.po_code}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                    <div className="font-bold text-[#0F1059] uppercase text-sm">{order.list}</div>
                    <div className="text-[10px] text-zinc-400 font-bold uppercase truncate max-w-[180px] mt-0.5 italic">
                      {order.detail || t('common.no_info')}
                    </div>
                    {order.reason_order && (
                      <div className="text-[9px] text-amber-500 font-medium mt-0.5 truncate max-w-[180px]">
                        {locale === 'th' ? 'เหตุผล' : 'Reason'}: {order.reason_order}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                    <span className="text-xl font-black tracking-tighter text-[#0F1059]">{order.quantity}</span>
                    <span className="text-[9px] font-black text-zinc-300 uppercase ml-1">{t('po.units')}</span>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap text-xs font-bold text-zinc-600">
                    {order.date_order ? new Date(order.date_order).toLocaleDateString(locale === 'th' ? 'th-TH' : 'en-GB') : '-'}
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap text-[10px] font-black text-[#0F1059] uppercase tracking-tight">
                    {order.buyer || '-'}
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase">{order.reviewer || '-'}</span>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase">{order.approver || '-'}</span>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                    <Badge variant="outline"
                      className={cn("rounded-lg text-[8px] font-black uppercase tracking-widest px-2.5 py-1 border-zinc-200",
                        order.status === "RECEIVED" ? "text-emerald-600 bg-emerald-50" :
                          order.status === "PENDING" ? "text-amber-600 bg-amber-50" :
                            order.status === "CANCELLED" ? "text-rose-600 bg-rose-50" : "text-blue-600 bg-blue-50"
                      )}
                    >
                      {order.status === 'PENDING' ? t('po.pending') :
                        order.status === 'ORDERED' ? t('po.ordered') :
                          order.status === 'RECEIVED' ? t('po.received') :
                            order.status === 'CANCELLED' ? t('po.cancelled') : order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all">
                      <button onClick={() => openModal(order)} className="p-2.5 rounded-xl bg-white border border-zinc-100 text-zinc-400 hover:text-[#0F1059] transition-all">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(order.id)} className="p-2.5 rounded-xl bg-white border border-zinc-100 text-zinc-400 hover:text-rose-600 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedOrder ? t('po.edit_title') : t('po.new_title')}
      >
        <form onSubmit={handleSave} className="space-y-6 max-h-[85vh] overflow-y-auto pr-2 px-1 font-sans">
          {selectedOrder && (
            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#0F1059]/5 border border-[#0F1059]/10 shadow-inner">
              <div>
                <p className="text-[9px] font-black text-[#0F1059]/60 uppercase tracking-widest mb-0.5">{locale === 'th' ? 'วันที่สร้าง' : 'Created At'}</p>
                <p className="text-[11px] font-bold text-[#0F1059]">{selectedOrder.createdAt ? new Date(selectedOrder.createdAt).toLocaleString(locale === 'th' ? 'th-TH' : 'en-GB') : '-'}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-[#0F1059]/60 uppercase tracking-widest mb-0.5">{locale === 'th' ? 'อัพเดตล่าสุด' : 'Updated At'}</p>
                <p className="text-[11px] font-bold text-[#0F1059]">{selectedOrder.updatedAt ? new Date(selectedOrder.updatedAt).toLocaleString(locale === 'th' ? 'th-TH' : 'en-GB') : '-'}</p>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('po.item_name')}</label>
              <input
                required
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.list}
                onChange={(e) => setFormData({ ...formData, list: e.target.value })}
              />
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('requests.ticket_details')}</label>
              <textarea
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none min-h-[80px] focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.detail}
                onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('po.quantity')}</label>
              <input
                type="number"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('po.order_date')}</label>
              <input
                type="date"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.date_order}
                onChange={(e) => setFormData({ ...formData, date_order: e.target.value })}
              />
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('po.reason')}</label>
              <select
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#0F1059]/30 transition-all shadow-sm cursor-pointer"
                value={formData.reason_order}
                onChange={(e) => setFormData({ ...formData, reason_order: e.target.value })}
              >
                <option value="">{locale === 'th' ? '-- เลือกเหตุผลการจัดซื้อ --' : '-- Select Reason --'}</option>
                <option value="ชำรุด">{locale === 'th' ? 'ชำรุด' : 'Deteriorate'}</option>
                <option value="สูญหาย">{locale === 'th' ? 'สูญหาย' : 'Disappear'}</option>
                <option value="ขาดสต๊อก">{locale === 'th' ? 'ขาดสต๊อก' : 'Lack of stock'}</option>
                <option value="ขอซื้อรายการใหม่">{locale === 'th' ? 'ขอซื้อรายการใหม่' : 'Request to buy a new item'}</option>
                {formData.reason_order && !["ชำรุด", "สูญหาย", "ขาดสต๊อก", "ขอซื้อรายการใหม่"].includes(formData.reason_order) && (
                  <option value={formData.reason_order} className="text-zinc-400">
                    {locale === 'th' ? '(อดีต) ' : '(Old) '} {formData.reason_order}
                  </option>
                )}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('po.buyer')}</label>
              <EmployeeSearchSelect
                value={formData.buyer}
                employees={employees}
                onChange={(val) => setFormData({ ...formData, buyer: val })}
                placeholder={t('requests.select_employee')}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{locale === 'th' ? 'ผู้ตรวจสอบ' : 'Reviewer'}</label>
              <EmployeeSearchSelect
                value={formData.reviewer}
                employees={employees}
                onChange={(val) => setFormData({ ...formData, reviewer: val })}
                placeholder={t('requests.select_employee')}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{locale === 'th' ? 'ผู้อนุมัติ' : 'Approver'}</label>
              <EmployeeSearchSelect
                value={formData.approver}
                employees={employees}
                onChange={(val) => setFormData({ ...formData, approver: val })}
                placeholder={t('requests.select_employee')}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('common.status')}</label>
              <select
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-black text-[#0F1059] uppercase outline-none focus:border-[#0F1059]/30 shadow-sm"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="PENDING">PENDING / {t('po.pending')}</option>
                <option value="ORDERED">ORDERED / {t('po.ordered')}</option>
                <option value="RECEIVED">RECEIVED / {t('po.received')}</option>
                <option value="CANCELLED">CANCELLED / {t('po.cancelled')}</option>
              </select>
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{t('po.image_attachment')}</label>
              <div className="flex flex-col gap-3">
                {formData.picture ? (
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-100 group shadow-sm">
                    <img
                      src={formData.picture}
                      alt="Preview"
                      className="w-full h-full object-contain"
                    />
                    <button
                      type="button"
                      onClick={removePicture}
                      className="absolute top-4 right-4 p-3 bg-rose-500 text-white rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-90"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                    className="w-full aspect-video rounded-3xl border-2 border-dashed border-zinc-100 flex flex-col items-center justify-center gap-3 hover:bg-zinc-50 hover:border-[#0F1059]/20 transition-all text-zinc-300 group bg-white shadow-sm"
                  >
                    {isUploading ? (
                      <Loader2 className="w-8 h-8 animate-spin text-[#0F1059]" />
                    ) : (
                      <>
                        <div className="h-14 w-14 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-white transition-colors shadow-sm">
                          <Upload className="w-6 h-6 group-hover:text-[#0F1059]" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em]">{t('po.click_upload')}</span>
                      </>
                    )}
                  </button>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleUpload}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-zinc-50">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsModalOpen(false)}
              className="flex-1 h-12 rounded-xl text-[11px] font-black uppercase tracking-widest"
            >
              {t('common.cancel')}
            </Button>
            <Button
              type="submit"
              disabled={isSaving || isUploading}
              className="flex-1 h-12 rounded-xl bg-[#0F1059] hover:bg-black text-white text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-[#0F1059]/10"
            >
              {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : t('po.save_order')}
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        title={t('admin_tickets.export_report_title')}
      >
        <div className="space-y-6 font-sans">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-4 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
              <FileSpreadsheet className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-black text-emerald-900 uppercase">{t('admin_tickets.export_settings')}</h3>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{locale === 'th' ? 'เลือกข้อมูลที่คุณต้องการดาวน์โหลด' : 'Select filters for your report'}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{locale === 'th' ? 'วันที่เริ่ม' : 'Start Date'}</label>
                <input
                  type="date"
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none"
                  value={exportDateStart}
                  onChange={(e) => setExportDateStart(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{locale === 'th' ? 'วันที่สิ้นสุด' : 'End Date'}</label>
                <input
                  type="date"
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none"
                  value={exportDateEnd}
                  onChange={(e) => setExportDateEnd(e.target.value)}
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-2">
              <p className="text-[10px] font-black text-zinc-400 uppercase">{t('admin_tickets.active_filters')}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white text-[#0F1059] border-zinc-100 text-[10px] uppercase">Status: {filterStatus}</Badge>
                {search && <Badge variant="outline" className="bg-white text-[#0F1059] border-zinc-100 text-[10px] uppercase">Search: {search}</Badge>}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <Button variant="ghost" onClick={() => setIsExportModalOpen(false)} className="flex-1 h-12 rounded-xl text-[11px] font-black uppercase tracking-widest">
              {t('common.cancel')}
            </Button>
            <Button
              onClick={processExport}
              className="flex-1 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/20"
            >
              {t('admin_tickets.download_excel')}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
