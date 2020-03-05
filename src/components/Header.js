import React, { Component } from "react";
import { connect } from "react-redux";
import "../index.css";
import { Link } from "react-router-dom";
import { logOut } from "../Store/Actions/LogInAction";
import home from "../images/home.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  render() {
    return (
      <div>
        <Link className="logout" to="/" onClick={() => this.props.logOut()}>
          Log Out
        </Link>
        <Link to="/" className="inicio">
          <img className="homeButton" src={home} alt="home"></img>
        </Link>{" "}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
