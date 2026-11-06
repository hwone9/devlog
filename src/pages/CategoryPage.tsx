import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { categories, notes } from "../data/notes";
import NoteCard from "../components/NoteCard";

export default function CategoryPage() {
  const { name = "" } = useParams();
  const categoryName = decodeURIComponent(name);
  const category = categories.find((item) => item.name === categoryName);
  const categoryNotes = notes.filter((note) => note.category === categoryName);

  if (!category)
    return (
      <div className="page-content">
        <h1>Category not found</h1>
        <Link to="/">Back home</Link>
      </div>
    );

  return (
    <div className="page-content">
      <Link to="/" className="back-link">
        <ArrowLeft size={15} /> All notes
      </Link>
      <section className="page-intro">
        <p className="eyebrow">CATEGORY</p>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
        <span className="muted-count">{categoryNotes.length} notes</span>
      </section>
      {categoryNotes.length ? (
        <div className="notes-grid">
          {categoryNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="empty-state">No notes in this category yet.</div>
      )}
    </div>
  );
}
