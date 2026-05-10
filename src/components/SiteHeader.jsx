export default function SiteHeader() {
  return (
    <header className="header">
      <a className="brand" href="/">
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
    </header>
  );
}
