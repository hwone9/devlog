import { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchDialog from "./components/SearchDialog";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import NotePage from "./pages/NotePage";
import { site } from "./data/site";

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Header
        onSearch={() => setSearchOpen(true)}
        onMenu={() => setMenuOpen(true)}
      />
      <div className="app-body">
        <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/notes/:id" element={<NotePage />} />
            <Route
              path="*"
              element={
                <div className="page-content">
                  <h1>Page not found</h1>
                  <a href="/">Return home</a>
                </div>
              }
            />
          </Routes>
          <footer className="site-footer">
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
            <span>{site.footer}</span>
          </footer>
        </main>
      </div>
      <SearchDialog open={searchOpen} onClose={closeSearch} />
    </div>
  );
}
