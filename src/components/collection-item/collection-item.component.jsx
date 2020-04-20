import React from "react";
import "./collection-item.styles.scss";
import { Link } from "react-router-dom";

function CollectionItem({ Poster, imdbRating, imdbID, Title, collectionType }) {
  return (
    <Link to={`/${imdbID}`} className="collection-item">
      <div className="image-container">
        <img className="image" alt={Title} src={`${Poster}`} />
      </div>
      {collectionType === "upcoming-direct" ||
      collectionType === "upcoming-indirect" ? (
        <div className="collection-footer">
          <span className="title">{Title}</span>
        </div>
      ) : (
        <div className="collection-footer">
          <span className="title">{Title}</span>
          <span className="rating">{imdbRating * 10}%</span>
        </div>
      )}
    </Link>
  );
}

export default CollectionItem;
