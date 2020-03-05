import React, { Component } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import landing from "./Landing";
import home from "../images/home.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <Link to="/" className="footer">
            <img className="homeButton" src={home} alt="home"></img>
          </Link>
        </footer>
      </div>
    );
  }
}
