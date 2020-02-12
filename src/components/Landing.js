import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="topLeft">
          <h1 className="">QueerMeUp</h1>
        </div>
        <div className="">
          <p>
            Find the perfect queer activities, bars, shows and events in your
            favourite city
          </p>

          <div className="container text-center">
            <a class="rainbow rainbow-5">Sign Up!</a>
            <a class="rainbow rainbow-5">Log In!</a>
          </div>
        </div>
      </div>
    );
  }
}
