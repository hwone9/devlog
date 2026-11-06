import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { notes } from '../data/notes'

type Props = { open: boolean; onClose: () => void }

export default function SearchDialog({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const results = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return []
    return notes.filter(note =>
      [note.title, note.description, note.category, ...note.tags].join(' ').toLowerCase().includes(value),
    )
  }, [query])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
      setQuery('')
    }
  }, [open])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="dialog-backdrop" onMouseDown={onClose}>
      <section className="search-dialog" onMouseDown={event => event.stopPropagation()}>
        <div className="search-input-wrap">
          <Search size={18} />
          <input ref={inputRef} value={query} onChange={event => setQuery(event.target.value)} placeholder="Search notes, tags, categories..." />
          <button className="icon-button" onClick={onClose} aria-label="Close search"><X size={18} /></button>
        </div>
        <div className="search-results">
          {!query.trim() ? <p className="search-hint">Type to search your notes.</p> :
            results.length ? results.map(note => (
              <Link key={note.id} to={`/notes/${note.id}`} className="search-result" onClick={onClose}>
                <div><strong>{note.title}</strong><span>{note.category} · {note.description}</span></div>
                <span className="result-date">{note.date}</span>
              </Link>
            )) : <p className="search-hint">No notes found for “{query}”.</p>}
        </div>
        <div className="dialog-footer"><span>Search by title, category, or tag</span><kbd>ESC</kbd></div>
      </section>
    </div>
  )
}