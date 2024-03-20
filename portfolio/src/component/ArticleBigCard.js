import React from "react"
import "./ArticleBigCard.scss"


const ArticleBigCard = ({article, key}) => {
    console.log(article);
    const {id, title, description, image} = article;

  return (
    <div className="art-big-card" key={key}>
      <div className="art-content">
        <h3 className="small-heading">{title}</h3>
        <p className="art-desc">{description}</p>
      </div>
      <div className="art-image">
        <div className="left-side img-side"></div>
        <div className="right-side img-side"></div>
        <div className="center-side img-side">
            <img src={image} />
        </div>
      </div>
    </div>
  )
}

export default ArticleBigCard
