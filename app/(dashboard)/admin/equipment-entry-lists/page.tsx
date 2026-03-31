"use client";

import React, { useState, useEffect } from "react";
import { Search, Loader2, Plus, Edit2, Trash2, Truck, UserCheck, Calendar, Image as ImageIcon, ChevronUp, ChevronDown, FileSpreadsheet } from "lucide-react";
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
import { useSession } from "next-auth/react";
import { EmployeeSearchSelect } from "@/components/employee-search-select";

interface Employee {
  id: string;
  employee_name_th: string;
  employee_code: string;
  department?: string;
  position?: string;
}

interface Entry {
  id: string;
  purchase_id: string;
  list?: string;
  brand_name?: string;
  quantity: number;
  unit?: string;
  recipient?: string;
  date_received?: string;
  item_type?: string;
  purchaseOrder?: {
    po_code: string;
    list: string;
    picture?: string;
  }
  createdAt?: string;
  updatedAt?: string;
}

interface PO {
  id: string;
  list: string;
  quantity: number;
  status: string;
}

export default function EquipmentEntriesPage() {
  const { data: session } = useSession();
  const { t, locale } = useTranslation();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [pos, setPos] = useState<PO[]>([]);
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);

  // Filters & Sorting logic states
  const [filterType, setFilterType] = useState("ALL");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Entry; direction: 'asc' | 'desc' }>({
    key: 'date_received',
    direction: 'desc'
  });

  // Export states
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportDateStart, setExportDateStart] = useState("");
  const [exportDateEnd, setExportDateEnd] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    purchase_id: "",
    list: "",
    brand_name: "",
    quantity: 1,
    unit: "Unit",
    recipient: "",
    item_type: "MAIN",
    date_received: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    fetchEntries();
    fetchPOs();
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await fetch("/api/employees");
      const data = await res.json();
      if (Array.isArray(data)) setEmployees(data);
    } catch (error) {
       console.error("Fetch employees error:", error);
    }
  };

  const fetchEntries = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/equipment-entry-lists");
      const data = await res.json();
      if (Array.isArray(data)) setEntries(data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPOs = async () => {
    try {
      const res = await fetch("/api/equipment-purchase-orders");
      const data = await res.json();
      if (Array.isArray(data)) {
        setPos(data.sort((a: any, b: any) => {
           if (a.status === 'RECEIVED' && b.status !== 'RECEIVED') return 1;
           if (a.status !== 'RECEIVED' && b.status === 'RECEIVED') return -1;
           return 0;
        }));
      }
    } catch (error) {
       console.error("Fetch POs error:", error);
    }
  };

  const handlePOChange = (poId: string) => {
    const selectedPO = pos.find(p => p.id === poId);
    if (selectedPO) {
      setFormData({
        ...formData,
        purchase_id: poId,
        list: selectedPO.list,
        quantity: selectedPO.quantity
      });
    } else {
      setFormData({ ...formData, purchase_id: poId });
    }
  };

  const handleSort = (key: keyof Entry) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredEntries = entries
    .filter(entry => {
      const searchLow = search.toLowerCase();
      const matchesSearch = (entry.purchaseOrder?.list?.toLowerCase().includes(searchLow) ||
                           entry.list?.toLowerCase().includes(searchLow) ||
                           entry.recipient?.toLowerCase().includes(searchLow));
      
      const matchesType = filterType === "ALL" || entry.item_type === filterType;
      
      return matchesSearch && matchesType;
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
    let dataToExport = filteredEntries;

    if (exportDateStart || exportDateEnd) {
      dataToExport = dataToExport.filter(e => {
        const date = e.date_received ? new Date(e.date_received) : new Date();
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

    const worksheetData = dataToExport.map(e => ({
      "PO Number": e.purchaseOrder?.po_code || 'INTERNAL',
      "Item Name": e.list || e.purchaseOrder?.list,
      "Brand": e.brand_name || '-',
      "Type": e.item_type,
      "Quantity": e.quantity,
      "Unit": e.unit,
      "Recipient": e.recipient,
      "Date Received": e.date_received ? new Date(e.date_received).toLocaleDateString('en-GB') : '-'
    }));

    await exportToExcel(worksheetData, `Equipment_Reception_${new Date().toISOString().split('T')[0]}`, "Inbound");
    setIsExportModalOpen(false);
  };

  const openModal = (entry?: Entry) => {
    if (entry) {
      setEditingId(entry.id);
      setSelectedEntry(entry);
      setFormData({
        purchase_id: entry.purchase_id || "",
        list: entry.list || "",
        brand_name: entry.brand_name || "",
        quantity: entry.quantity,
        unit: entry.unit || "Unit",
        recipient: entry.recipient || "",
        item_type: entry.item_type || "MAIN",
        date_received: entry.date_received ? new Date(entry.date_received).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
      });
    } else {
      setEditingId(null);
      setSelectedEntry(null);
      setFormData({
        purchase_id: "",
        list: "",
        brand_name: "",
        quantity: 1,
        unit: "Unit",
        recipient: session?.user?.name || "",
        item_type: "MAIN",
        date_received: new Date().toISOString().split('T')[0]
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const url = editingId ? `/api/equipment-entry-lists/${editingId}` : "/api/equipment-entry-lists";
      const method = editingId ? "PATCH" : "POST";
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchEntries();
      } else {
         const err = await res.json();
         alert(err.error || "Failed to save entry");
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
      const res = await fetch(`/api/equipment-entry-lists/${id}`, { method: "DELETE" });
      if (res.ok) fetchEntries();
    } catch (error) {
       console.error("Delete error:", error);
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#0F1059] tracking-tight uppercase flex items-center gap-3">
             <div className="h-10 w-10 rounded-2xl bg-[#0F1059] flex items-center justify-center text-white border border-[#0F1059]/10">
                <Truck className="h-5 w-5" />
             </div>
             {t('receiving.title')}
          </h1>
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mt-1">{t('receiving.subtitle')}</p>
        </div>
        <div className="flex flex-wrap gap-2">
           <Button 
             onClick={() => handleExportExcel()} 
             variant="outline"
             className="rounded-2xl border-zinc-200 hover:border-[#0F1059] hover:text-[#0F1059] py-6 px-6 font-black uppercase tracking-widest text-[11px] h-12 transition-all"
          >
            <FileSpreadsheet className="mr-2 h-4 w-4 text-emerald-600" /> {t('admin_tickets.export_excel')}
          </Button>
          <Button onClick={() => openModal()} className="rounded-2xl bg-[#0F1059] hover:bg-black py-6 px-8 font-black uppercase tracking-widest text-[11px] h-12 transition-all shadow-xl shadow-[#0F1059]/10">
            <Plus className="mr-2 h-4 w-4" /> {t('receiving.new_reception')}
          </Button>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center p-4 rounded-3xl border border-zinc-100 bg-white/50 shadow-sm font-sans uppercase">
        <div className="flex items-center gap-3 px-4 py-2 bg-zinc-50 rounded-2xl border border-zinc-100 group focus-within:border-[#0F1059]/30 transition-all lg:col-span-3">
             <Search className="h-4 w-4 text-zinc-400 group-focus-within:text-[#0F1059]" />
             <input 
                className="bg-transparent border-none outline-none text-[10px] font-black uppercase w-full"
                placeholder={t('receiving.search_placeholder')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
             />
        </div>
        
        <select 
          className="bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-2.5 text-[10px] font-black uppercase outline-none text-zinc-600 focus:border-[#0F1059]/30 cursor-pointer transition-all"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="ALL">{t('receiving.all_types')}</option>
          <option value="MAIN">{t('receiving.main_hw')}</option>
          <option value="PERIPHERAL">{t('receiving.peripheral')}</option>
          <option value="CONSUMABLE">{t('receiving.consumable')}</option>
          <option value="SOFTWARE">{t('receiving.software_license')}</option>
          <option value="OTHER">{t('receiving.other')}</option>
        </select>
      </div>

      <Card className="rounded-[40px] border-zinc-100 overflow-hidden bg-white/90">
        <div className="overflow-x-auto">
          <Table className="w-full text-left font-sans">
            <TableHeader className="bg-zinc-50/50">
              <TableRow className="border-none">
                <TableHead className="px-6 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest w-24">{t('po.media')}</TableHead>
                <TableHead 
                  className="px-6 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest cursor-pointer hover:bg-zinc-100 transition-colors"
                  onClick={() => handleSort('list')}
                >
                  <div className="flex items-center gap-1">
                    {t('receiving.entry_details')}
                    {sortConfig.key === 'list' && (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
                  </div>
                </TableHead>
                <TableHead className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{t('receiving.classification')}</TableHead>
                <TableHead className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{t('receiving.recipient')}</TableHead>
                <TableHead 
                   className="px-6 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest text-center cursor-pointer hover:bg-zinc-100 transition-colors"
                   onClick={() => handleSort('quantity')}
                >
                   <div className="flex items-center justify-center gap-1">
                      {t('po.quantity')}
                      {sortConfig.key === 'quantity' && (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
                   </div>
                </TableHead>
                <TableHead 
                   className="px-6 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest cursor-pointer hover:bg-zinc-100 transition-colors"
                   onClick={() => handleSort('date_received')}
                >
                   <div className="flex items-center gap-1">
                      {t('receiving.received_at')}
                      {sortConfig.key === 'date_received' && (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
                   </div>
                </TableHead>
                <TableHead className="p-0"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-zinc-100">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell colSpan={7} className="h-24 animate-pulse bg-zinc-50/20" />
                  </TableRow>
                ))
              ) : filteredEntries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="px-6 py-20 text-center text-zinc-400 italic font-bold uppercase tracking-widest">
                      {t('receiving.no_records_found')}
                  </TableCell>
                </TableRow>
              ) : filteredEntries.map((entry) => (
                <TableRow key={entry.id} className="hover:bg-zinc-50/50 transition-all group">
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    {entry.purchaseOrder?.picture ? (
                       <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-zinc-100 shadow-sm transition-transform duration-700 hover:scale-125">
                          <img 
                            src={entry.purchaseOrder.picture} 
                            alt={entry.list || entry.purchaseOrder.list} 
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={() => window.open(entry.purchaseOrder?.picture, '_blank')}
                          />
                       </div>
                    ) : (
                       <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center border border-dashed border-zinc-200 text-zinc-300">
                          <ImageIcon className="w-6 h-6" />
                       </div>
                    )}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <div className="font-bold text-[#0F1059] uppercase text-sm leading-tight">
                       {entry.list || entry.purchaseOrder?.list}
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                       <Badge variant="outline" className="text-[8.5px] font-black uppercase px-2 shadow-none border-zinc-200 text-zinc-400">
                          {t('receiving.po_ref')}: {entry.purchaseOrder?.po_code || 'INTERNAL'}
                       </Badge>
                       <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest">
                           {entry.brand_name || '-'}
                       </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                    <Badge variant="outline" className={cn(
                      "rounded-lg text-[8px] font-black uppercase tracking-widest px-2 py-1",
                      entry.item_type === "MAIN" ? "text-blue-600 bg-blue-50 border-blue-200" :
                      entry.item_type === "PERIPHERAL" ? "text-purple-600 bg-purple-50 border-purple-200" :
                      entry.item_type === "CONSUMABLE" ? "text-amber-600 bg-amber-50 border-amber-200" :
                      entry.item_type === "SOFTWARE" ? "text-teal-600 bg-teal-50 border-teal-200" :
                      "text-zinc-500 bg-zinc-50 border-zinc-200"
                    )}>
                      {entry.item_type || '-'}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                        <UserCheck className="h-3.5 w-3.5 text-zinc-300" />
                        <span className="text-xs font-black text-zinc-700 uppercase tracking-tight">{entry.recipient || '-'}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="text-xl font-black tracking-tighter text-[#0F1059]">{entry.quantity}</span>
                    <span className="text-[9px] font-black text-zinc-300 uppercase ml-1.5">{entry.unit || t('po.units')}</span>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-500">
                       <Calendar className="h-3.5 w-3.5 text-zinc-300" />
                       {entry.date_received ? new Date(entry.date_received).toLocaleDateString(locale === 'th' ? 'th-TH' : 'en-GB') : '-'}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all">
                        <button onClick={() => openModal(entry)} className="p-2.5 rounded-xl bg-white border border-zinc-100 text-zinc-400 hover:text-[#0F1059] transition-all">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(entry.id)} className="p-2.5 rounded-xl bg-white border border-zinc-100 text-zinc-400 hover:text-rose-600 transition-all">
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
        title={editingId ? t('receiving.edit_title') : t('receiving.new_title')}
      >
        <form onSubmit={handleSave} className="space-y-6 max-h-[85vh] overflow-y-auto pr-2 px-1 font-sans">
           {selectedEntry && (
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#0F1059]/5 border border-[#0F1059]/10 shadow-inner">
                 <div>
                    <p className="text-[9px] font-black text-[#0F1059]/60 uppercase tracking-widest mb-0.5">{locale === 'th' ? 'วันที่สร้าง' : 'Created At'}</p>
                    <p className="text-[11px] font-bold text-[#0F1059]">{selectedEntry.createdAt ? new Date(selectedEntry.createdAt).toLocaleString(locale === 'th' ? 'th-TH' : 'en-GB') : '-'}</p>
                 </div>
                 <div>
                    <p className="text-[9px] font-black text-[#0F1059]/60 uppercase tracking-widest mb-0.5">{locale === 'th' ? 'อัพเดตล่าสุด' : 'Updated At'}</p>
                    <p className="text-[11px] font-bold text-[#0F1059]">{selectedEntry.updatedAt ? new Date(selectedEntry.updatedAt).toLocaleString(locale === 'th' ? 'th-TH' : 'en-GB') : '-'}</p>
                 </div>
              </div>
           )}
           <div className="space-y-1.5">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest ml-1">{t('receiving.po_source')}</label>
              <select 
                 required
                 className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 text-sm font-black text-[#0F1059] uppercase outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm cursor-pointer"
                 value={formData.purchase_id}
                 onChange={(e) => handlePOChange(e.target.value)}
              >
                 <option value="">-- SELECT PURCHASE ORDER --</option>
                  {pos.map(po => (
                     <option key={po.id} value={po.id}>
                        {po.status === 'RECEIVED' ? '[✓ RECEIVED] ' : `[STATUS: ${po.status}] `} {po.list}
                     </option>
                  ))}
              </select>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5 col-span-2">
                 <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest ml-1">{t('receiving.final_item_name')}</label>
                 <input 
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-3.5 text-sm font-medium outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm"
                    value={formData.list}
                    onChange={(e) => setFormData({...formData, list: e.target.value})}
                    placeholder="Specific name if different from PO..."
                 />
              </div>
              <div className="space-y-1.5">
                 <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest ml-1">{t('receiving.brand_name')}</label>
                 <input 
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-3.5 text-sm font-medium outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm"
                    value={formData.brand_name}
                    onChange={(e) => setFormData({...formData, brand_name: e.target.value})}
                 />
              </div>
              <div className="space-y-1.5">
                 <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest ml-1">{t('receiving.classification')}</label>
                 <select 
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-3.5 text-sm font-black text-zinc-700 uppercase outline-none focus:border-[#0F1059]/30 shadow-sm"
                    value={formData.item_type}
                    onChange={(e) => setFormData({...formData, item_type: e.target.value})}
                 >
                    <option value="MAIN">{t('receiving.main_hw')}</option>
                    <option value="PERIPHERAL">{t('receiving.peripheral')}</option>
                    <option value="CONSUMABLE">{t('receiving.consumable')}</option>
                    <option value="SOFTWARE">{t('receiving.software_license')}</option>
                    <option value="OTHER">{t('receiving.other')}</option>
                 </select>
              </div>
              <div className="space-y-1.5">
                 <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest ml-1">{t('po.quantity')}</label>
                 <input 
                    type="number"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-3.5 text-sm font-black text-[#0F1059] outline-none focus:border-[#0F1059]/30 shadow-sm"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value) || 0})}
                 />
              </div>
              <div className="space-y-1.5">
                 <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest ml-1">{t('receiving.unit_of_measure')}</label>
                 <input 
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-3.5 text-sm font-medium outline-none focus:border-[#0F1059]/30 shadow-sm"
                    value={formData.unit}
                    onChange={(e) => setFormData({...formData, unit: e.target.value})}
                    placeholder="Each, Set, Unit..."
                 />
              </div>
              <div className="space-y-1.5">
                 <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest ml-1">{t('receiving.receiver')}</label>
                 <EmployeeSearchSelect 
                    value={formData.recipient}
                    employees={employees}
                    onChange={(val) => setFormData({...formData, recipient: val})}
                    placeholder={t('requests.select_employee') || 'Search receiver...'}
                 />
              </div>
              <div className="space-y-1.5">
                 <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest ml-1">{t('receiving.inbound_date')}</label>
                 <input 
                    type="date"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-3.5 text-sm font-medium outline-none focus:border-[#0F1059]/30 shadow-sm"
                    value={formData.date_received}
                    onChange={(e) => setFormData({...formData, date_received: e.target.value})}
                 />
              </div>
           </div>

           <div className="flex items-center gap-3 pt-6 border-t border-zinc-100">
              <Button 
                 type="button" 
                 variant="ghost" 
                 onClick={() => setIsModalOpen(false)}
                 className="flex-1 h-14 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-100"
              >
                 {t('common.cancel')}
              </Button>
              <Button 
                type="submit" 
                disabled={isSaving}
                className="flex-1 h-14 rounded-2xl bg-[#0F1059] hover:bg-black text-white text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-[#0F1059]/10"
              >
                 {isSaving ? <Loader2 className="h-5 w-5 animate-spin mx-auto" /> : t('receiving.complete_reception')}
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
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{locale === 'th' ? 'เลือกข้อมูลที่คุณต้องการรายงาน' : 'Select filters for your report'}</p>
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
                   <Badge variant="outline" className="bg-white text-[#0F1059] border-zinc-100 text-[10px] uppercase">Type: {filterType}</Badge>
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
