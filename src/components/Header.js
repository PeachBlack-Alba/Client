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
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      console.log("REDIRECT");
      this.props.history.push("/");
    }
  }
  handleLogOut(e) {
    console.log("in handle logout");
    this.props.logOutAction();
    console.log("this.props.isLoggedIn", this.props.isLoggedIn);
    window.location.reload(); // when refresh the page goes to componentdidmount and " this.props.history.push("/");" pushes it to the home page
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

      // this.props.history.push("/");
    }
  };
};

const mapStateToProps = state => {
  console.log("state in header", state);
  return {
    isLoggedIn: state.logIn.isLoggedIn
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
