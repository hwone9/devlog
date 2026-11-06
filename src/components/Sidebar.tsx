import { NavLink } from 'react-router-dom'
import { BookOpen, Code2, Database, FileText, Layers, Wrench, X } from 'lucide-react'
import { categories } from '../data/notes'

const icons = [Code2, Layers, FileText, BookOpen, Database, Wrench]

type SidebarProps = { open: boolean; onClose: () => void }

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && <button className="sidebar-backdrop" onClick={onClose} aria-label="Close navigation" />}
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="sidebar-mobile-head">
          <span>Navigation</span>
          <button className="icon-button" onClick={onClose} aria-label="Close navigation"><X size={18} /></button>
        </div>
        <div className="nav-group">
          <p className="nav-label">OVERVIEW</p>
          <NavLink to="/" end onClick={onClose} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <BookOpen size={16} /> All notes
          </NavLink>
        </div>
        <div className="nav-group">
          <p className="nav-label">CATEGORIES</p>
          {categories.map((category, index) => {
            const Icon = icons[index] ?? FileText
            return (
              <NavLink
                key={category.name}
                to={`/category/${encodeURIComponent(category.name)}`}
                onClick={onClose}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={16} /> {category.name}
              </NavLink>
            )
          })}
        </div>
        <div className="sidebar-bottom">
          <span className="status-dot" />
          <span>Personal knowledge base</span>
        </div>
      </aside>
    </>
  )
}