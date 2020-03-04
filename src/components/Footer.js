import React, { Component } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import landing from "./Landing";
import home from "../images/home.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container text-center">
            <small>
              <Link to="/" className="footer">
                <img
                  className="homeButton"
                  src={home}
                  alt="home"
                  style={{
                    width: 60,
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                ></img>
              </Link>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}
