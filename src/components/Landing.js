import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="landingContent">
        <div className="">
          <h1 class="title">
            <span class="a">Qu</span>
            <span class="b">ee</span>
            <span class="c">r</span>
            <span class="d">M</span>
            <span class="e">e</span>
            <span class="f">U</span>
            <span class="a">P</span>
          </h1>
        </div>
        <div>
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
