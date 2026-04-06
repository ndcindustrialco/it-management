"use client";

import { useTranslation } from "@/lib/i18n/LanguageContext";
import { EmptyState } from "@/components/ui/empty-state";
import { ItNoteTable } from "./it-note-table";
import { ItNoteCards } from "./it-note-cards";

interface ItNoteOverviewProps {
  notes: any[];
  query?: string;
}

export function ItNoteOverview({ notes, query }: ItNoteOverviewProps) {
  const { t } = useTranslation();

  if (notes.length === 0) {
    return (
      <div className="py-20 lg:py-32">
        <EmptyState
            title={query ? t('common.no_results') || "Tech Logic Found None" : t('notes.no_knowledge') || "IT Central Brain Empty"}
            description={query 
                ? `${t('common.no_results_desc') || 'No technical documentation or vault entries found matching'} "${query}".` 
                : t('notes.no_knowledge_desc') || "The knowledge base is empty. Start documenting your infrastructure, configurations, and secrets."
            }
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="hidden lg:block">
        <ItNoteTable notes={notes} />
      </div>
      <div className="lg:hidden">
        <ItNoteCards notes={notes} />
      </div>
    </div>
  );
}
