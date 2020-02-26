import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target; // this is the target element
    let value = target.value;
    let name = target.name; // name attribute of the input, so we know what changes if the email or the password
    // whenever the input change we restate the state :
    console.log(value);
    console.log(name);
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The data is:");
    console.log(this.state);
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
            value={this.state.email}
            onChange={this.handleChange}
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
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="FormField">
          <button
            className="FormField__Button mr-20"
            onClick={this.handleSubmit}
          >
            Log In
          </button>{" "}
        </div>
      </div>
    );
  }
}
