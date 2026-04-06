import { ItNoteList } from "@/components/notes/it-note-list";
import { ItNoteHeader } from "@/components/notes/it-note-header";
import { Suspense } from "react";
import { ItNoteSkeleton } from "@/components/notes/it-note-skeleton";

export default async function NotesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div className="flex flex-col gap-4 p-4 lg:p-6 bg-slate-50/50 min-h-screen font-sans">
      <ItNoteHeader />
      
      <div className="max-w-7xl mx-auto w-full">
        <Suspense key={q} fallback={<ItNoteSkeleton />}>
          <ItNoteList query={q} />
        </Suspense>
      </div>
    </div>
  );
}
