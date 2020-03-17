import React, { Component } from "react";
import noLiked from "../images/noLiked.png";
import Liked from "../images/Liked.png";

export default class Buttontest extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      activitiesId: this.props.activities.id,
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    this.setState({
      liked: !this.state.liked
    });
    console.log(this.state);
  }

  render() {
    console.log(this.props);

    return (
      <div className="customContainer">
        <button className="" onClick={this.handleChange}>
          <img className="likeButton" src={noLiked} alt="home"></img>
          {/* //onClick={this.handleSubmit} */}
        </button>
      </div>
    );
  }
}
