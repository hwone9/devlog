import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Clock3 } from "lucide-react";
import { notes } from "../data/notes";

export default function NotePage() {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);

  if (!note)
    return (
      <div className="page-content">
        <h1>Note not found</h1>
        <Link to="/">Back home</Link>
      </div>
    );

  return (
    <article className="page-content article-page">
      <Link
        to={`/category/${encodeURIComponent(note.category)}`}
        className="back-link"
      >
        <ArrowLeft size={15} /> {note.category}
      </Link>
      <header className="article-header">
        <p className="eyebrow">{note.category.toUpperCase()}</p>
        <h1>{note.title}</h1>
        <p className="article-description">{note.description}</p>
        <div className="article-meta">
          <span>{note.date}</span>
        </div>
        <div className="tag-list">
          {note.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="article-layout">
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {note.content}
          </ReactMarkdown>
        </div>
        <aside className="article-aside">
          <p className="eyebrow">IN THIS NOTE</p>
          <p>Read through the concepts, examples, and personal takeaways.</p>
          <Link to="/">Browse all notes →</Link>
        </aside>
      </div>
      <div className="article-end">
        <span>End of note</span>
        <Link to="/">
          Back to all notes <ArrowLeft size={14} />
        </Link>
      </div>
    </article>
  );
}
