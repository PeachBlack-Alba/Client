import React, { Component } from "react";
import { connect } from "react-redux";
import "../index.css";
import { Link, withRouter } from "react-router-dom";
import { logOutAction } from "../Store/Actions/LogInAction";
import home from "../images/home.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logOutAction();
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="containerHeader">
        <button className="logout" onClick={e => this.handleLogOut(e)}>
          Log Out
        </button>
        <Link to="/" className="inicio">
          <img className="homeButton" src={home} alt="home"></img>
        </Link>{" "}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOutAction: () => {
      dispatch(logOutAction());
    }
  };
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.logIn.isLoggedIn
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
