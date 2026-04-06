"use client";

import { useState } from "react";
import { Plus, Search as SearchIcon, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ItNoteModal } from "./it-note-modal";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { useSession } from "next-auth/react";
import { createItNote } from "@/lib/actions/it-notes";
import { useToast } from "@/components/ui/toast";

export function ItNoteHeader() {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const { toast } = useToast();
  const isAdmin = (session?.user as any)?.role === "admin";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="space-y-6 mb-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#0F1059] tracking-tight uppercase flex items-center gap-3">
             <div className="h-10 w-10 rounded-lg bg-[#0F1059] flex items-center justify-center text-white border border-[#0F1059]/10 shadow-sm">
                <ShieldCheck className="h-5 w-5" />
             </div>
             {t('notes.title')}
          </h1>
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mt-1 opacity-80">
            {t('notes.subtitle')}
          </p>
        </div>
        
        {isAdmin && (
          <Button 
            onClick={() => setIsDrawerOpen(true)}
            className="rounded-lg bg-[#0F1059] hover:bg-black py-5 px-8 font-black uppercase tracking-widest text-[11px] h-11 transition-all shadow-sm flex items-center gap-2"
          >
            <Plus className="h-4 w-4 stroke-[3px]" />
            {t('notes.create_note')}
          </Button>
        )}
      </div>

      {/* Filter Bar - Modern Integrated Style */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center p-4 rounded-xl border border-zinc-100 bg-white/50 shadow-sm uppercase">
        <div className="flex items-center gap-3 px-4 py-2 bg-zinc-50 rounded-lg border border-zinc-100 group focus-within:border-[#0F1059]/30 transition-all lg:col-span-4">
          <SearchIcon className="h-4 w-4 text-zinc-400 group-focus-within:text-[#0F1059]" />
          <input 
             className="bg-transparent border-none outline-none text-[10px] font-black uppercase w-full placeholder:text-zinc-300"
             placeholder={t('notes.search_placeholder')}
             defaultValue={searchParams.get("q") || ""}
             onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <ItNoteModal
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSubmit={async (data) => {
          try {
            await createItNote(data);
            router.refresh();
            toast({ message: t('notes.success_create') || "Note created successfully", variant: "success" });
            setIsDrawerOpen(false);
          } catch (error: any) {
            toast({ message: error.message || t('common.error'), variant: "error" });
          }
        }}
      />
    </div>
  );
}
