import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { notes } from "../data/notes";
import { categories } from "../data/categories";
import { site } from "../data/site";
import NoteCard from "../components/NoteCard";

export default function HomePage() {
  const recentNotes = [...notes]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  return (
    <div className="page-content">
      <section className="hero">
        <p className="eyebrow">PERSONAL DEVELOPER KNOWLEDGE BASE</p>
        <h1>{site.tagline}</h1>
        <p className="hero-description">{site.description}</p>
        <div className="hero-meta">
          <span>
            <FileText size={14} /> {notes.length} notes
          </span>
          <span>
            <BookOpen size={14} /> {categories.length} topics
          </span>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LIBRARY</p>
            <h2>Explore topics</h2>
          </div>
        </div>
        <div className="category-grid">
          {categories.map((category) => {
            const count = notes.filter(
              (note) => note.categoryId === category.id,
            ).length;
            return (
              <Link
                key={category.name}
                to={`/category/${encodeURIComponent(category.id)}`}
                className="category-card"
              >
                <span className="category-card-title">{category.name}</span>
                <span className="category-card-description">
                  {category.description}
                </span>
                <span className="category-card-bottom">
                  {count} {count === 1 ? "note" : "notes"}{" "}
                  <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE LATEST</p>
            <h2>Recently updated</h2>
          </div>
          <span className="muted-count">{notes.length} total notes</span>
        </div>
        <div className="notes-grid">
          {recentNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </section>
    </div>
  );
}
