import React, { useMemo } from "react";
import SiteHeader from "../components/SiteHeader";
import { getArticleBySlug } from "../data/articles";

const TALLY_FORM_URL = "https://tally.so/r/WOeKEa";

export default function ArticleDetail({ slug }) {
  const article = useMemo(() => getArticleBySlug(slug), [slug]);

  if (!article) {
    return (
      <>
        <SiteHeader />
        <main className="blogPage">
          <div className="container">
            <article className="articleDetail notFound">
              <p className="blogEyebrow">Blog IA Operativa</p>
              <h1>Articolo non trovato</h1>
              <p>L'articolo richiesto non è disponibile. Torna all'elenco per continuare la lettura.</p>
              <a className="secondaryButton" href="/blog">Vai al Blog</a>
            </article>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main className="blogPage">
        <div className="container">
          <article className="articleDetail">
            <p className="blogEyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <div className="blogMeta">
              <span>{new Date(article.date).toLocaleDateString("it-IT")}</span>
            </div>
            <p className="articleExcerpt">{article.excerpt}</p>

            <div className="articleContent">
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="articleCta">
              <h2>Vuoi ricevere altri casi pratici come questo?</h2>
              <p>Iscriviti al Radar IA Operativa per ricevere aggiornamenti selezionati su strumenti, processi e applicazioni AI per PMI.</p>
              <a className="primaryButton" href={TALLY_FORM_URL} target="_blank" rel="noreferrer">Iscriviti al Radar IA Operativa</a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
