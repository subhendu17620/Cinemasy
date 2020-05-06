import React from "react";
import { Link } from "react-router-dom";

import "./book-movie-title.styles.scss";

const BookMovieTitle = ({ match }) => {
  function dateFormatter(noOfDays) {
    var date = new Date();
    date.setDate(new Date().getDate() + noOfDays);
    return date.toString().split(" ").splice(1, 3).join("-");
  }

  return (
    <div className="date-list-container">
      <h1>Select the Date :</h1>

      <div className="date-list">
        {}
        <Link to={`${match.url}/${dateFormatter(1)}`}>
          <span>{dateFormatter(1)}</span>
        </Link>

        <Link to={`${match.url}/${dateFormatter(2)}`}>
          <span>{dateFormatter(2)}</span>
        </Link>

        <Link to={`${match.url}/${dateFormatter(3)}`}>
          <span>{dateFormatter(3)}</span>
        </Link>

        <Link to={`${match.url}/${dateFormatter(4)}`}>
          <span>{dateFormatter(4)}</span>
        </Link>

        <Link to={`${match.url}/${dateFormatter(5)}`}>
          <span>{dateFormatter(5)}</span>
        </Link>

        <Link to={`${match.url}/${dateFormatter(6)}`}>
          <span>{dateFormatter(6)}</span>
        </Link>
      </div>
    </div>
  );
};

export default BookMovieTitle;
