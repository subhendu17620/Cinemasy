import React from "react";
import { Link } from "react-router-dom";

import "./book-movie-title.styles.scss";

const BookMovieTitle = ({ match }) => {
  // var today = new Date();
  // var dd = today.getDate();

  // dd = Number(dd) + Number(1);

  // var mm = today.getMonth();
  // var yyyy = today.getFullYear();

  // if (dd < 10) {
  //   dd = "0" + dd;
  // }

  // if (mm < 10) {
  //   mm = "0" + mm;
  // }
  // const date = dd + "-" + mm + "-" + yyyy;
  // var date = new Date();

  // console.log(date.toString().split(" ").splice(1, 3).join("-"));
  // date.setDate(new Date().getDate() + 2);
  // console.log(date.toString().split(" ").splice(1, 3).join("-"));

  // alert(d);
  // var d = 3;
  // d += 1;
  // console.log(d);
  function dateFormatter(noOfDays) {
    var date = new Date();
    date.setDate(new Date().getDate() + noOfDays);
    return date.toString().split(" ").splice(1, 3).join("-");
  }
  // console.log(d);

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
