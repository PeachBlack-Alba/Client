import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="landingContent">
        <div className="">
          <h1 className="title">
            <span className="a">Qu</span>
            <span className="b">ee</span>
            <span className="c">r</span>
            <span className="d">M</span>
            <span className="e">e</span>
            <span className="f">U</span>
            <span className="a">P</span>
          </h1>
        </div>
        <div>
          <p>
            Find the perfect queer activities, bars, shows and events in your
            favourite city
          </p>
          <Link to="/cities">Cities</Link>
          <div className="container text-center">
            <Link to="/signUp" className="rainbow rainbow-5">
              Sign Up!
            </Link>
            <Link to="/logIn" className="rainbow rainbow-5">
              Log In!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
