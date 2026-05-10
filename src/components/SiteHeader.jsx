import { useState } from "react";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const goToHomeSection = (sectionId) => (event) => {
    event.preventDefault();
    closeMenu();

    const targetUrl = `/#${sectionId}`;

    const scrollToTarget = () => {
      const target = document.getElementById(sectionId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", targetUrl);
      window.dispatchEvent(new PopStateEvent("popstate"));

      window.setTimeout(scrollToTarget, 120);
      return;
    }

    window.history.pushState({}, "", `#${sectionId}`);
    scrollToTarget();
  };

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
        <a href="/#cosa" onClick={goToHomeSection("cosa")}>
          Cosa trovi
        </a>
        <a href="/#metodo" onClick={goToHomeSection("metodo")}>
          Metodo
        </a>
        <a href="/#newsletter" onClick={goToHomeSection("newsletter")}>
          Newsletter
        </a>
        <a href="/blog" onClick={closeMenu}>
          Blog
        </a>
      </nav>

      <a className="headerCta" href="/#newsletter" onClick={goToHomeSection("newsletter")}>
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
          <a href="/#cosa" onClick={goToHomeSection("cosa")}>
            Cosa trovi
          </a>
          <a href="/#metodo" onClick={goToHomeSection("metodo")}>
            Metodo
          </a>
          <a href="/#newsletter" onClick={goToHomeSection("newsletter")}>
            Newsletter
          </a>
          <a href="/blog" onClick={closeMenu}>
            Blog
          </a>
          <a className="mobileNavCta" href="/#newsletter" onClick={goToHomeSection("newsletter")}>
            Iscriviti
          </a>
        </nav>
      )}
    </header>
  );
}
