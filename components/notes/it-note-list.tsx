import { getItNotes } from "@/lib/actions/it-notes";
import { ItNoteOverview } from "./it-note-overview";

interface ItNoteListProps {
  query?: string;
}

export async function ItNoteList({ query }: ItNoteListProps) {
  const notes = await getItNotes(query);

  return (
    <div className="space-y-6">
      <ItNoteOverview notes={notes} query={query} />
    </div>
  );
}
