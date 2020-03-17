import React, { Component } from "react";
// import like from "../images/fav3.png";

export default class Likebutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked,
      username: "",
      activitiesId: this.props.activities.id,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    handleClick() {
      const activitiesId = this.props.activities.id;

      this.setState({
        liked: !this.state.liked
      });
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
