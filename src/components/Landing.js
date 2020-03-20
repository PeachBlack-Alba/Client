import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import Header from "../components/Header";

class Landing extends Component {
  render() {
    return (
      <div className="landingContent">
        <div className="">
          <h1 className="tittle">
            <span className="a">Qu</span>
            <span className="b">ee</span>
            <span className="c">r</span>
            <span className="d">M</span>
            <span className="e">e</span>
            <span className="f">A</span>
            <span className="a">PP</span>
          </h1>
        </div>
        <div>
          <p className="p_landing">
            Find the perfect queer activities, bars, shows and events in your
            favourite city
          </p>
          <Link to="/citiesPage" className="start">
            Let's Start!
          </Link>

          {this.props.logIn.isLoggedIn ? (
            <React.Fragment>
              <Header></Header>
              <p className="helloName">
                Hello, hello, hello! {this.props.logIn.user.username}
              </p>
            </React.Fragment>
          ) : (
            <div className="container text-center">
              <Link to="/signUp" className="rainbow rainbow-1">
                Sign Up!
              </Link>
              <Link to="/logIn" className="rainbow rainbow-1">
                Log In!
              </Link>
            </div>
          )}
          {/* <Buttontest></Buttontest> */}
        </div>
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
export default connect(mapStateToProps)(Landing);
