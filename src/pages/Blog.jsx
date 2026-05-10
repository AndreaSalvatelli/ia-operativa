import React from "react";
import { articles } from "../data/articles";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <main className="blogPage">
      <div className="container">
        <header className="blogHeader">
          <p className="blogEyebrow">Blog IA Operativa</p>
          <h1>Approfondimenti pratici su AI e processi aziendali</h1>
          <p>
            Analisi sobrie e operative per imprenditori, professionisti e team PMI che vogliono usare l'intelligenza artificiale in modo concreto.
          </p>
        </header>

        <section className="blogGrid" aria-label="Elenco articoli">
          {articles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </section>
      </div>
    </main>
  );
}
