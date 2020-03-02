import React, { Component } from "react";
import "../index.css";
import { Link } from "react-router-dom";
// import home from "../media/homeIcon.png"; //cambiar

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="sticky-footer" className="py-4 bg-secondary text-dark-50">
          <div className="container text-center">
            <small>
              <Link to="">
                {/* <img
                  className="homeButton"
                  src={} // cambiar
                  alt="home"
                  style={{
                    width: 70,
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                ></img> */}
                <p>Footer</p>
              </Link>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}
