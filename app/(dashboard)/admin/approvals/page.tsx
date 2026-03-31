"use client";

import React, { useState, useEffect } from "react";
import { 
  Package, 
  Ticket, 
  CheckCircle2, 
  User2, 
  ChevronRight,
  Loader2,
  Calendar,
  Search,
  CheckCircle,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Modal } from "@/components/ui/modal";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function ApprovalsPage() {
  const { data: session } = useSession();
  const { t, locale } = useTranslation();
  const [activeTab, setActiveTab] = useState<"EQUIPMENT" | "TICKETS">("EQUIPMENT");
  const [equipmentRequests, setEquipmentRequests] = useState<any[]>([]);
  const [ticketRequests, setTicketRequests] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  
  // Sort State
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Confirmation Modal State
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [confirmData, setConfirmData] = useState<any>({
    id: "",
    type: "EQUIPMENT",
    step: "IT",
    isReject: false,
    comment: "",
    title: ""
  });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [eqRes, ticketRes] = await Promise.all([
        fetch("/api/equipment-requests"),
        fetch("/api/requests")
      ]);
      const eqData = await eqRes.json();
      const ticketData = await ticketRes.json();

      setEquipmentRequests(Array.isArray(eqData) ? eqData : []);
      setTicketRequests(Array.isArray(ticketData) ? ticketData : []);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openConfirm = (req: any, type: "EQUIPMENT" | "TICKETS", isReject: boolean = false) => {
    const title = type === "EQUIPMENT" 
      ? (req.equipmentList?.equipmentEntry?.item_name || "Equipment Request")
      : (req.description || "Support Ticket");

    setConfirmData({
      id: req.id,
      type,
      step: "IT",
      isReject,
      comment: "",
      title
    });
    setIsConfirmOpen(true);
  };

  const handleAction = async () => {
    setProcessing(true);
    const { id, type, isReject, comment } = confirmData;
    
    // IT Approval logic
    const field = "it_approval_status";
    const nameField = "it_approval";
    const commentField = "it_approval_comment";
    const approverName = session?.user?.name || "IT Admin";
    
    const status = isReject ? "REJECTED" : "APPROVED";
    
    const payload: any = { 
      [field]: status, 
      [nameField]: approverName,
      [commentField]: comment 
    };
    
    const endpoint = type === "EQUIPMENT" ? `/api/equipment-requests/${id}` : `/api/requests/${id}`;

    try {
      const res = await fetch(endpoint, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setIsConfirmOpen(false);
        fetchData();
      }
    } catch (error) {
       console.error("Action error:", error);
    } finally {
      setProcessing(false);
    }
  };

  const processAndFilter = (data: any[], type: "EQUIPMENT" | "TICKETS") => {
    return data
      .filter(r => {
        // Show ONLY what IT needs to approve (it_approval_status is PENDING)
        const isITPending = r.it_approval_status === "PENDING"||r.it_approval_status === "";
        const searchLow = search.toLowerCase();
        const matchesSearch = type === "EQUIPMENT" 
           ? ((r.user?.username || "").toLowerCase().includes(searchLow) ||
                            (r.user?.employee?.employee_name_th || "").toLowerCase().includes(searchLow) ||
                            (r.equipmentList?.equipmentEntry?.item_name || "").toLowerCase().includes(searchLow) ||
                            (r.equipmentList?.equipmentEntry?.list || "").toLowerCase().includes(searchLow))
           : (r.description?.toLowerCase().includes(searchLow) || r.employee?.employee_name_th?.toLowerCase().includes(searchLow));
        
        return isITPending && matchesSearch;
      })
      .sort((a, b) => {
        const dateA = new Date(a.createdAt || a.request_date).getTime();
        const dateB = new Date(b.createdAt || b.request_date).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
  };

  const pendingEq = processAndFilter(equipmentRequests, "EQUIPMENT");
  const pendingTickets = processAndFilter(ticketRequests, "TICKETS");

  const stats = {
    eqTotal: equipmentRequests.filter(r => r.it_approval_status === "PENDING" || r.it_approval_status === "").length,
    ticketTotal: ticketRequests.filter(r => r.it_approval_status === "PENDING" || r.it_approval_status === "").length
  };

  const activeList = activeTab === "EQUIPMENT" ? pendingEq : pendingTickets;

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 border-b border-zinc-200">
        <div>
          <h1 className="text-2xl font-black text-[#0F1059] flex items-center gap-2 uppercase tracking-tight">
            <CheckCircle className="h-6 w-6" />
            {t('approvals.title')}
          </h1>
          <p className="text-sm font-medium text-zinc-500 mt-1">{t('approvals.subtitle')}</p>
        </div>

        <div className="flex bg-zinc-100 p-1 rounded-2xl border border-zinc-200">
          <button 
            onClick={() => setActiveTab("EQUIPMENT")}
            className={cn(
              "px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2",
              activeTab === "EQUIPMENT" ? "bg-white text-[#0F1059] shadow-sm" : "text-zinc-500 hover:text-zinc-700"
            )}
          >
            <Package className="h-4 w-4" /> 
            {t('approvals.equipment_tab')} ({stats.eqTotal})
          </button>
          <button 
            onClick={() => setActiveTab("TICKETS")}
            className={cn(
              "px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2",
              activeTab === "TICKETS" ? "bg-white text-[#0F1059] shadow-sm" : "text-zinc-500 hover:text-zinc-700"
            )}
          >
            <Ticket className="h-4 w-4" /> 
            {t('approvals.tickets_tab')} ({stats.ticketTotal})
          </button>
        </div>
      </div>

      <div className="bg-white/50 backdrop-blur-sm p-4 rounded-3xl border border-zinc-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full font-sans uppercase">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input 
            type="text" 
            placeholder={t('approvals.search_placeholder')}
            className="w-full bg-zinc-50 border border-zinc-100 rounded-xl pl-10 pr-4 py-2.5 text-[10px] font-black uppercase focus:outline-none focus:ring-1 focus:ring-[#0F1059] transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button 
            variant="outline"
            size="sm"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="text-[10px] font-black uppercase tracking-widest h-10 rounded-xl gap-2 border-zinc-100"
          >
            {sortOrder === 'desc' ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
            {sortOrder === 'desc' ? t('approvals.sort_latest') : t('approvals.sort_oldest')}
          </Button>
          <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest bg-zinc-50 px-3 py-2.5 rounded-xl border border-zinc-100 whitespace-nowrap">
            {t('common.total')} {activeList.length} {t('approvals.items_found')}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
             <Card key={i} className="h-32 animate-pulse border-zinc-100 rounded-[30px] bg-zinc-50/50" />
          ))
        ) : activeList.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-[40px] border border-dashed border-zinc-200">
             <div className="h-16 w-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0F1059]/20">
                <CheckCircle2 className="h-8 w-8" />
             </div>
             <p className="text-xl font-black text-[#0F1059] uppercase tracking-tighter">{t('approvals.no_pending')}</p>
             <p className="text-xs font-bold text-zinc-400 mt-1 uppercase tracking-widest">{t('approvals.pending_cleared')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {activeList.map((r) => (
              <Card key={r.id} className="p-6 rounded-[30px] border-zinc-100 hover:border-[#0F1059]/20 hover:shadow-xl hover:shadow-[#0F1059]/5 transition-all group overflow-hidden relative">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-[#0F1059]/5 text-[#0F1059] border-none font-mono text-[10px] px-2 py-0.5 rounded-lg">
                        ID: {r.id.slice(-8).toUpperCase()}
                      </Badge>
                      <Badge className={cn(
                        "text-[9px] font-black uppercase tracking-widest rounded-lg px-2 py-0.5 border-none",
                        activeTab === "EQUIPMENT" ? "bg-amber-100 text-amber-600" : "bg-sky-100 text-sky-600"
                      )}>
                        {activeTab === "EQUIPMENT" ? t('approvals.equipment_type') : t('approvals.ticket_type')}
                      </Badge>
                      <div className="text-[10px] font-bold text-zinc-400 flex items-center gap-1.5 ml-2 uppercase">
                        <Calendar className="h-3 w-3" />
                         {new Date(r.createdAt || r.request_date).toLocaleDateString(locale === 'th' ? 'th-TH' : 'en-GB')}
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-[#0F1059] mb-2 uppercase tracking-tight">
                      {activeTab === "EQUIPMENT" 
                         ? (r.equipmentList?.equipmentEntry?.list || r.equipmentList?.equipmentEntry?.item_name || t('approvals.equipment_type')) 
                         : (r.description || 'SUPPORT TICKET')}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm font-sans">
                      <div className="flex items-center gap-1.5 font-bold text-zinc-600 uppercase text-[11px] tracking-wide">
                        <User2 className="h-4 w-4 text-[#0F1059]/40" />
                        {activeTab === "EQUIPMENT" 
                           ? (r.user?.employee?.employee_name_th || r.user?.username || 'GUEST') 
                           : (r.employee?.employee_name_th || 'GUEST')}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Badge variant="outline" className={cn(
                          "text-[9px] font-black uppercase tracking-widest rounded-lg px-3 py-1 border-zinc-100",
                          r.approval_status === "APPROVED" ? "text-emerald-600 bg-emerald-50" : "text-amber-600 bg-amber-50"
                        )}>
                          DEPT: {r.approval_status || "PENDING"}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/3 p-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-[12px] font-medium text-zinc-500 h-fit italic leading-relaxed">
                    <p className="font-black text-[9px] text-[#0F1059]/30 uppercase tracking-[0.2em] mb-2 not-italic">{t('approvals.remarks_reason')}</p>
                    "{r.reason || r.problem_detail || t('approvals.no_data')}"
                  </div>

                  <div className="flex items-center gap-2 lg:border-l lg:pl-6 border-zinc-100">
                    <Button 
                      size="sm"
                      onClick={() => openConfirm(r, activeTab)}
                      className="bg-[#0F1059] hover:bg-black text-white h-12 px-8 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg shadow-[#0F1059]/10 transition-all hover:scale-105 active:scale-95"
                    >
                      {t('approvals.check_and_approve')}
                    </Button>
                    <Button 
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 rounded-xl border-zinc-100 text-zinc-400 hover:text-[#0F1059] transition-all bg-white"
                      onClick={() => window.location.href = activeTab === "EQUIPMENT" ? "/admin/equipment-requests" : "/admin/tickets"}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Modal 
        isOpen={isConfirmOpen} 
        onClose={() => setIsConfirmOpen(false)} 
        title={confirmData.isReject ? t('approvals.reject_modal_title') : t('approvals.it_approve_modal_title')}
      >
        <div className="space-y-6 pt-2 font-sans">
          <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-2xl shadow-sm">
            <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mb-2">{t('approvals.processing_item')}</p>
            <h4 className="text-sm font-bold text-[#0F1059] line-clamp-2 uppercase leading-tight">{confirmData.title}</h4>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('approvals.it_comment')}</label>
            <textarea 
              className="w-full bg-white border border-zinc-100 rounded-2xl p-4 text-[13px] font-medium min-h-[120px] focus:outline-none focus:ring-1 focus:ring-[#0F1059] transition-all shadow-sm"
              placeholder={t('approvals.it_comment_placeholder')}
              value={confirmData.comment}
              onChange={(e) => setConfirmData({...confirmData, comment: e.target.value})}
            />
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-zinc-50">
            {!confirmData.isReject && (
              <Button 
                 variant="ghost" 
                 onClick={() => setConfirmData({...confirmData, isReject: true})}
                 className="flex-1 text-rose-500 hover:bg-rose-50 text-[11px] font-black uppercase tracking-widest rounded-xl h-12"
              >
                 {t('approvals.switch_to_reject')}
              </Button>
            )}
            <Button 
               disabled={processing}
               onClick={handleAction}
               className={cn(
                  "flex-2 text-white text-[11px] font-black uppercase tracking-widest h-12 rounded-xl transition-all shadow-lg",
                  confirmData.isReject ? "bg-rose-500 hover:bg-rose-600 shadow-rose-500/10" : "bg-[#0F1059] hover:bg-black shadow-[#0F1059]/10"
               )}
            >
               {processing ? <Loader2 className="h-4 w-4 animate-spin mx-auto" /> : (confirmData.isReject ? t('approvals.confirm_reject') : t('approvals.confirm_it_approve'))}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
