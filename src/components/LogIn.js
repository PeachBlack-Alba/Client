import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div>
        <div className="PageSwitcher">
          <Link
            exact
            to="/Login"
            ClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Log In
          </Link>
          <Link
            to="/SignUp"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign Up
          </Link>
        </div>
        <h1>Log In</h1>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">
            Email adress
          </label>
          <input
            type="email"
            id="name"
            className="FormField__Input"
            placeholder="Enter your email adress"
            name="email"
          />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="FormField__Input"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <div className="FormField">
          <button className="FormField__Button mr-20">Log In</button>{" "}
        </div>
      </div>
    );
  }
}
