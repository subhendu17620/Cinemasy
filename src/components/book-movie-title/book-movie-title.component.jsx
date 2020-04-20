import React from "react";
import { Link } from "react-router-dom";

import "./book-movie-title.styles.scss";

const BookMovieTitle = ({ match }) => {
  return (
    <div className="date-list-container">
      <h1>Select the Date :</h1>
      <div className="date-list">
        <Link to={`${match.url}/19-04-2020`}>
          <span>19-04-2020</span>
        </Link>
        <Link to={`${match.url}/20-04-2020`}>
          <span>20-04-2020</span>
        </Link>
        <Link to={`${match.url}/21-04-2020`}>
          <span>21-04-2020</span>
        </Link>
        <Link to={`${match.url}/22-04-2020`}>
          <span>22-04-2020</span>
        </Link>
        <Link to={`${match.url}/23-04-2020`}>
          <span>23-04-2020</span>
        </Link>
        <Link to={`${match.url}/24-04-2020`}>
          <span>24-04-2020</span>
        </Link>
      </div>
    </div>
  );
};

export default BookMovieTitle;
