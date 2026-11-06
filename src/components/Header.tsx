import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { site } from "../data/site";

type HeaderProps = {
  onSearch: () => void;
  onMenu: () => void;
};

export default function Header({ onSearch, onMenu }: HeaderProps) {
  return (
    <header className="topbar">
      <button
        className="icon-button mobile-menu-button"
        onClick={onMenu}
        aria-label="Open navigation"
      >
        <Menu size={19} />
      </button>
      <Link to="/" className="wordmark">
        {site.name}
        <span>.</span>
      </Link>
      <div className="topbar-right">
        <button className="search-trigger" onClick={onSearch}>
          <Search size={15} />
          <span>Search notes</span>
          <kbd>⌘ K</kbd>
        </button>
        <a
          className="top-link"
          href="https://github.com/hwone9"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span>↗</span>
        </a>
      </div>
    </header>
  );
}
