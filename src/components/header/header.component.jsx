import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

function Header(props) {
  function handleLogout() {
    fetch("http://localhost:3001/api/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then(() => {
        console.log("logged out");
        window.location.replace("http://localhost:3000");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="header">
      <div className="container logo-container">
        <Link to="/" className="logo">
          cinemasy
        </Link>
      </div>
      <div className="container options">
        <Link to="/popular" className="option">
          Popular
        </Link>
        <Link to="/nowshowing" className="option">
          Now Showing
        </Link>
        <Link to="/upcoming" className="option">
          Upcoming
        </Link>
      </div>
      <div className="container sign-in-container">
        <Link to="/contact">
          <img
            className="help-line-avatar"
            src="https://image.flaticon.com/icons/svg/2776/2776451.svg"
            alt="customer-care-avatar"
          />
        </Link>
        &nbsp;&nbsp;&nbsp;
        {props.isLoggedIn === "true" ? (
          <Link className="log-out" onClick={handleLogout}>
            logout
          </Link>
        ) : (
          <Link to="/signin" className="sign-in">
            sign in
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
