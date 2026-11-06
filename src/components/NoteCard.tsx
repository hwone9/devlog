import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Note } from "../data/notes";

export default function NoteCard({ note }: { note: Note }) {
  return (
    <Link to={`/notes/${note.id}`} className="note-card">
      <div className="note-card-top">
        <span className="category-label">{note.category}</span>
        <ArrowUpRight size={16} className="card-arrow" />
      </div>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <div className="note-card-bottom">
        <span>{note.date}</span>
      </div>
    </Link>
  );
}
