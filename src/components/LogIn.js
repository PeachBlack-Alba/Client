import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginAction } from "../Store/Actions/LogInAction";
import { connect } from "react-redux";
import Footer from "./Footer";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      token: "",
      message: "",
      error: false
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
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The data is:");
    console.log(this.state);
    console.log("handleSubmit");
    const user = this.state;
    console.log(user);
    if (!this.state.email || !this.state.password) {
      console.log("missing fields");
      this.setState({
        error: true,
        error: "All fields must be field"
      });
    } else {
      this.setState({ error: false, error: "good to go" });
      this.props.loginAction(this.state.email, this.state.password);
    }
  }

  logInRender() {
    console.log("this.state.token", this.state.token);

    // setValue(event.target.value);

    return (
      <div>
        <h1>Welcome to QueerMeUp {this.state.username}</h1>
        <Link to="/citiespage">
          <p>something</p>
        </Link>
      </div>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {/* <div className="PageSwitcher">
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
        </div> */}
        <h1>Log In</h1>
        {this.props.logIn.isLoggedIn ? (
          this.logInRender()
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
        <React.Fragment>
          <Footer></Footer>;
        </React.Fragment>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    logIn: state.logIn,
    error: state.error,
    message: state.message,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => ({
  loginAction: (email, password) => dispatch(loginAction(email, password))
});
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
