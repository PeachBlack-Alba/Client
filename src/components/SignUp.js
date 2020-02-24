import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/Login" className="PageSwitcher__Item">
            Log In
          </Link>
          <a
            href="#"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign Up
          </a>
        </div>
        <h1>Sign Up</h1>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="FormField__Input"
                placeholder="Enter your full name"
                name="name"
              />
            </div>
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
              <label className="FormField__Label" htmlFor="picture">
                Picture
              </label>
              <input
                type="text"
                id="picture"
                className="FormField__Input"
                placeholder="Enter your picture url"
                name="picture"
              />
            </div>
            <div className="FormField">
              <button className="FormField__Button mr-20">Sign Up</button>{" "}
              <a to="/sign-in" className="FormField__Link">
                I'm already member
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
