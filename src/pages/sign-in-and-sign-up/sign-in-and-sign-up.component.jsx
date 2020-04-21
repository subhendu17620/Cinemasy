import React from "react";
import "./sign-in-and-sign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

function SignInAndSignUp({ onAuthChange }) {
  return (
    <div className="sign-in-and-sign-up-page-container">
      <h1>Log In or Create an Account</h1>
      <div className="sign-in-and-sign-up-container">
        <SignIn onAuthChange={onAuthChange} />
        <SignUp onAuthChange={onAuthChange} />
      </div>

      <div className="credits">copyright &copy; Subhendu Maji 2020</div>
    </div>
  );
}

export default SignInAndSignUp;
