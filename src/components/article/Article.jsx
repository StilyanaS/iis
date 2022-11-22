import React from "react";
import "./article.css";
const Article = ({ imgUrl, altText, title, date }) => {
  return (
    <div className="robots__blog-container_article">
      <div className="robots__blog-container_article-image">
        <img src={imgUrl} alt={altText} />
      </div>
      <div className="robots__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read the article</p>
      </div>
    </div>
  );
};

export default Article;
