import React from "react";

export default function BlogCard({ article }) {
  return (
    <article className="blogCard">
      <div className="blogMeta">
        <span>{article.category}</span>
        <span>{new Date(article.date).toLocaleDateString("it-IT")}</span>
      </div>
      <h2>
        <a href={`/blog/${article.slug}`}>{article.title}</a>
      </h2>
      <p>{article.excerpt}</p>
      <a className="blogReadMore" href={`/blog/${article.slug}`}>
        Leggi articolo →
      </a>
    </article>
  );
}
