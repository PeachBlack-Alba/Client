import React, { Component } from "react";
// import like from "../images/fav3.png";

export default class Likebutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked,
      username: "",
      itineraryId: this.props.itineraryId,
      count: 0
    };
    incrementLikes = () => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.incrementLikes}>
          {/* <img className="LikeButton" src={like} alt="like"></img> */}
          Likes: {this.state.count}
        </button>
      </div>
    );
  }
}
