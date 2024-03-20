import React from "react"
import ArticleBigCard from "../component/ArticleBigCard"
import { ArticleData } from "../data/ArticleData"

const ArticlePage = () => {
  return (
    <div className="article-layout">
      <h2 className="main-heading">Articles</h2>
      {ArticleData?.map((article, key) => (
        <ArticleBigCard key={key} article={article} />
      ))}
    </div>
  )
}

export default ArticlePage
