"use client";

import { useState } from "react";
import { ItNoteModal } from "./it-note-modal";
import { updateItNote, deleteItNote } from "@/lib/actions/it-notes";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Eye, Loader2, AlertTriangle } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { useSession } from "next-auth/react";

export function ItNoteActions({ note }: { note: any }) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { data: session } = useSession();
  const isAdmin = (session?.user as any)?.role === "admin";
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleOpenEdit = () => {
    setIsReadOnly(false);
    setIsEditOpen(true);
  };

  const handleOpenView = () => {
    setIsReadOnly(true);
    setIsEditOpen(true);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteItNote(note.id);
      router.refresh();
      toast({ message: t('notes.success_delete') || "Note deleted successfully", variant: "success" });
      setIsDeleteOpen(false);
    } catch (error: any) {
      toast({ message: error.message || t('common.error'), variant: "error" });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-end gap-1.5 isolate">
        {/* View Action - Everyone can see this */}
        <button 
          onClick={handleOpenView}
          className="p-2.5 rounded-lg bg-white border border-zinc-100 text-zinc-400 hover:text-[#0F1059] hover:border-[#0F1059]/20 transition-all shadow-sm active:scale-95"
          title="View Knowledge Base"
        >
          <Eye className="h-4 w-4" />
        </button>

        {/* Admin only actions */}
        {isAdmin && (
          <>
            <button 
              onClick={handleOpenEdit}
              className="p-2.5 rounded-lg bg-white border border-zinc-100 text-zinc-400 hover:text-amber-500 hover:border-amber-100 transition-all shadow-sm active:scale-95"
              title="Edit Documentation"
            >
              <Edit2 className="h-4 w-4" />
            </button>

            <button 
              onClick={() => setIsDeleteOpen(true)}
              className="p-2.5 rounded-lg bg-white border border-zinc-100 text-zinc-400 hover:text-rose-600 hover:border-rose-100 transition-all shadow-sm active:scale-95"
              title="Purge Entry"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      <ItNoteModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        initialData={note}
        isReadOnly={isReadOnly}
        onSubmit={async (data) => {
          if (isReadOnly) return;
          try {
            await updateItNote(note.id, data);
            router.refresh();
            toast({ message: t('notes.success_update') || "Note updated successfully", variant: "success" });
            setIsEditOpen(false);
          } catch (error: any) {
            toast({ message: error.message || t('common.error'), variant: "error" });
          }
        }}
      />

      <Modal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        title={t('notes.delete_confirm_title') || "Confirm Deletion"}
        size="sm"
      >
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="h-16 w-16 bg-rose-50 rounded-2xl flex items-center justify-center border border-rose-100 ring-8 ring-rose-50/50">
                <AlertTriangle className="h-8 w-8 text-rose-500" />
            </div>
            <div className="space-y-1">
                <h4 className="text-sm font-black text-slate-900 uppercase">Confirm Permanent Delete</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Deletion is permanent. Are you sure? <span className="text-slate-900 font-bold uppercase tracking-tighter">"{note.title}"</span>. 
                </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button 
                variant="ghost" 
                onClick={() => setIsDeleteOpen(false)}
                className="flex-1 rounded-xl font-bold border border-slate-200 h-11 text-xs uppercase tracking-widest text-slate-500"
            >
                {t('common.cancel')}
            </Button>
            <Button 
                disabled={isDeleting}
                onClick={handleDelete}
                className="flex-1 rounded-xl bg-[#0F1059] hover:bg-black text-white font-black h-11 shadow-lg shadow-[#0F1059]/10"
            >
                {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : t('common.delete')}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
