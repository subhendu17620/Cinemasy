import React from "react";

import "./pay-page.styles.scss";
import ReactDOM from "react-dom";

import QRview from "../qr-view-page/qr-view";

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
    } else if (this.state.nameOnCard.length < 3) {
      alert("Enter a valid name with more than 3 Character.");
    } else if (this.state.cardNumber.length !== 16) {
      alert("Please Enter valid Card Number");
    } else if (parseInt(this.state.expirationMonth) > 12) {
      alert("Please Enter valid Expiration Month");
    } else if (parseInt(this.state.expirationYear) < 20) {
      alert("Please Enter valid Expiration Year");
    } else if (this.state.cvv.length !== 3) {
      alert(
        parseInt(this.state.expirationYear) +
          "Please enter valid 3 digit CVV number."
      );
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
                  "Welcome to Cinemasy \nMovie: " +
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
              <span>
                <img
                  className="pay-method"
                  src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-512.png"
                  alt=""
                  srcset=""
                  width="100px"
                  height="auto"
                />
                &nbsp; &nbsp;
                <img
                  className="pay-method"
                  src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Paypal-39-512.png"
                  alt=""
                  srcset=""
                  width="100px"
                  height="auto"
                />
              </span>
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
