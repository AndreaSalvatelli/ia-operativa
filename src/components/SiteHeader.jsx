import React from "react";

const TALLY_FORM_URL = "https://tally.so/r/WOeKEa";

export default function SiteHeader({ homeAnchors = false }) {
  const cosaHref = homeAnchors ? "#cosa" : "/#cosa";
  const metodoHref = homeAnchors ? "#metodo" : "/#metodo";
  const newsletterHref = homeAnchors ? "#newsletter" : "/#newsletter";

  return (
    <header className="header">
      <div className="brand">
        <div className="brandIcon">
          <span className="icon">✦</span>
        </div>
        <div>
          <div className="brandName">IA Operativa</div>
          <div className="brandTagline">Intelligenza artificiale applicata</div>
        </div>
      </div>

      <nav className="nav">
        <a href={cosaHref}>Cosa trovi</a>
        <a href={metodoHref}>Metodo</a>
        <a href={newsletterHref}>Newsletter</a>
        <a href="/blog">Blog</a>
      </nav>

      <a className="headerCta" href={TALLY_FORM_URL} target="_blank" rel="noreferrer">
        Iscriviti
      </a>
    </header>
  );
}
