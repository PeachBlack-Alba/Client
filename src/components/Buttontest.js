import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import fav3 from "../images/fav3.png";

export default class Buttontest extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      // activitiesId: this.props.activities.Id,
      liked: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    this.setState({
      liked: !this.state.liked
    });
    console.log(this.state);
  }

  render() {
    console.log(this.props);

    const text = this.state.liked;
    const label = this.state.liked;
    return (
      <div className="customContainer">
        <button className="" onClick={this.handleChange}>
          <img className="likeButton" src={fav3} alt="home"></img>
          {/* //onClick={this.handleSubmit} */}
          {label}
        </button>
        <p>you {text} this.</p>
      </div>
    );
  }
}
