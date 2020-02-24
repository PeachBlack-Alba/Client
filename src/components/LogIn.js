import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <div className="PageSwitcher">
          <a
            to="/Login"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Log In
          </a>
          <Link
            to="/SignUp"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign Up
          </Link>
        </div>
        <h1>Log In</h1>
      </div>
    );
  }
}
