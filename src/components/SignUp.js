import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    picture: "",
    username: "",
    message: "",
    email: "",
    password: ""
    // isError: false,
    // error: false,
    // isRegistered: false
  };
  render() {
    return (
      <div>
        <div className="PageSwitcher">
          <a href="#" className="PageSwitcher__Item">
            Log In
          </a>
          <a
            href="#"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign Up
          </a>
        </div>{" "}
      </div>
    );
  }
}
