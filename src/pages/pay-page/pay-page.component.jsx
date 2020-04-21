import React from "react";

import "./pay-page.styles.scss";
import ReactDOM from "react-dom";

import QRview from "../qr-view-page/qr-view";

import QRCode from "qrcode.react";
import qrGenerate from "../qr-view-page/qr-view";

class PayPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameOnCard: "",
      cardNumber: "",
      expirationMonth: "",
      expirationYear: "",
      cvv: "",
      bookingDetails:
        props.match.params.imdbID +
        "/" +
        props.match.params.date +
        "/" +
        props.match.params.show +
        "/" +
        props.match.params.seat,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.nameOnCard === "" ||
      this.state.cardNumber === "" ||
      this.state.expirationMonth === "" ||
      this.state.expirationYear === "" ||
      this.state.cvv === ""
    ) {
      alert("Please fill out all the fields");
    } else {
      fetch("http://localhost:3001/api/pay", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(this.state),
      })
        .then((res) => {
          if (res.status === 400) {
            alert("ERROR: Fill all the required fields");
          } else {
            ReactDOM.render(
              <QRview
                msg={
                  "Movie: " +
                  this.props.match.params.Title.replace(/\+/g, " ") +
                  "\n" +
                  "Date: " +
                  this.props.match.params.date +
                  "\n" +
                  "Show Time: " +
                  this.props.match.params.show +
                  "\n" +
                  "Seat No.: " +
                  this.props.match.params.seat
                }
              />,
              document.querySelector(".pay-container")
            );

            // this.props.history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="pay-container">
        <h2>
          Booking the seat {this.props.match.params.seat} at{" "}
          {this.props.match.params.show}hrs on {this.props.match.params.date} of{" "}
          {this.props.match.params.Title.replace(/\+/g, " ")}
        </h2>
        <div className="pay-form-container">
          <form>
            <input
              className="input"
              name="nameOnCard"
              type="text"
              label="Name on Card"
              placeholder="Name on Card"
              value={this.state.nameOnCard}
              onChange={this.handleChange}
              required
            />
            <input
              className="input"
              name="cardNumber"
              type="text"
              label="Card Number"
              placeholder="Card Number"
              value={this.state.cardNumber}
              onChange={this.handleChange}
              required
            />
            <div className="expiry-box">
              <input
                className="input"
                name="expirationMonth"
                type="text"
                label="Expiration Month"
                placeholder="Expiration Month"
                value={this.state.expirationMonth}
                onChange={this.handleChange}
                required
              />
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <input
                className="input"
                name="expirationYear"
                type="text"
                label="Expiration Year"
                placeholder="Expiration Year"
                value={this.state.expirationYear}
                onChange={this.handleChange}
                required
              />
            </div>

            <input
              className="input"
              name="cvv"
              type="password"
              label="CVV"
              placeholder="CVV"
              value={this.state.cvv}
              onChange={this.handleChange}
              required
            />
            <div>
              <button
                className="button"
                type="submit"
                onClick={this.handleSubmit}
              >
                Pay
              </button>
              <span>Total amount to be paid: Rs.100</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PayPage;
