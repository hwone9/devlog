import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Note } from "../data/notes";
import { categories } from "../data/categories";

export default function NoteCard({ note }: { note: Note }) {
  const category = categories.find((item) => item.id === note.categoryId);
  return (
    <Link to={`/notes/${note.id}`} className="note-card">
      <div className="note-card-top">
        {category && (
          <span
            className="category-label"
            style={{
              color: category.color,
              backgroundColor: category.backgroundColor,
            }}
          >
            {category.name}
          </span>
        )}
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
