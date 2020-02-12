import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>QueerMeUp</h1>
        <p>
          Find the perfect queer activities, bars, shows and events in your
          favourite city
        </p>
        <div className="container text-center">
          <a class="rainbow rainbow-5">Sign In!</a>

          <a class="rainbow rainbow-5">Log In!</a>

          {/* <Button variant="dark" className="signInButton" size="lg">
            Sign In
          </Button>
          {/* <p>Or, If you are already a queer member:</p> */}
          {/*<Button variant="dark" className="logInButton" size="lg">
            Log In
          </Button> */}
        </div>
      </div>
    );
  }
}
