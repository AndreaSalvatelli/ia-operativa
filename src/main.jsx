import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import IAOperativaLanding from "./IAOperativaLanding.jsx";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail";
import { getArticleBySlug } from "./data/articles";

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleChange = () => setPathname(window.location.pathname);

    const handleClick = (event) => {
      const anchor = event.target.closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) {
        return;
      }

      if (anchor.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      event.preventDefault();
      window.history.pushState({}, "", href);
      handleChange();
    };

    window.addEventListener("popstate", handleChange);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", handleChange);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return pathname;
}

function Seo({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (!description) {
      return;
    }

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, [title, description]);

  return null;
}

function AppRouter() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <>
        <Seo
          title="IA Operativa | Intelligenza artificiale applicata alle aziende"
          description="IA Operativa seleziona strumenti, casi d'uso e automazioni AI per PMI, professionisti e aziende italiane."
        />
        <IAOperativaLanding />
      </>
    );
  }

  if (pathname === "/blog") {
    return (
      <>
        <Seo
          title="Blog IA Operativa | Approfondimenti AI per PMI"
          description="Approfondimenti pratici su processi, dati e applicazioni concrete dell'intelligenza artificiale per PMI italiane."
        />
        <Blog />
      </>
    );
  }

  if (pathname.startsWith("/blog/")) {
    const slug = pathname.replace("/blog/", "");
    const article = getArticleBySlug(slug);

    return (
      <>
        <Seo
          title={article?.metaTitle || "Articolo | Blog IA Operativa"}
          description={article?.metaDescription || "Articolo del blog IA Operativa su AI applicata e processi aziendali."}
        />
        <ArticleDetail slug={slug} />
      </>
    );
  }

  return (
    <main className="blogPage">
      <Seo
        title="Pagina non trovata | IA Operativa"
        description="La pagina richiesta non è disponibile su IA Operativa."
      />
      <div className="container">
        <article className="articleDetail notFound">
          <p className="blogEyebrow">Errore 404</p>
          <h1>Pagina non trovata</h1>
          <p>Il contenuto richiesto non è disponibile. Torna alla home o consulta il blog.</p>
          <div className="heroActions">
            <a className="primaryButton" href="/">Torna alla home</a>
            <a className="secondaryButton" href="/blog">Vai al blog</a>
          </div>
        </article>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
