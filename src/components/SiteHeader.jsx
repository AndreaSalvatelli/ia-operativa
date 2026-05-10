import { useState } from "react";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <a className="brand" href="/" onClick={closeMenu}>
        <span className="brandIcon" aria-hidden="true">
          ✦
        </span>

        <span className="brandCopy">
          <span className="brandName">IA Operativa</span>
          <span className="brandTagline">Intelligenza artificiale applicata</span>
        </span>
      </a>

      <nav className="nav" aria-label="Navigazione principale">
        <a href="/#cosa">Cosa trovi</a>
        <a href="/#metodo">Metodo</a>
        <a href="/#newsletter">Newsletter</a>
        <a href="/blog">Blog</a>
      </nav>

      <a className="headerCta" href="/#newsletter">
        Iscriviti
      </a>

      <button
        className="mobileMenuButton"
        type="button"
        aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isMenuOpen && (
        <nav className="mobileNav" aria-label="Navigazione mobile">
          <a href="/#cosa" onClick={closeMenu}>Cosa trovi</a>
          <a href="/#metodo" onClick={closeMenu}>Metodo</a>
          <a href="/#newsletter" onClick={closeMenu}>Newsletter</a>
          <a href="/blog" onClick={closeMenu}>Blog</a>
          <a className="mobileNavCta" href="/#newsletter" onClick={closeMenu}>
            Iscriviti
          </a>
        </nav>
      )}
    </header>
  );
}
