import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>LOGO</h1>
        <p>Paragrafs with main information about the app for new users</p>

        <div className="button-container">
          <Button variant="dark" className="signInButton">
            Sign In
          </Button>
          {/* <p>Or, If you are already a queer member:</p> */}
          <Button variant="dark" className="logInButton">
            Log In
          </Button>
        </div>
      </div>
    );
  }
}
