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

      const decoded = jwt_decode(localStorage.token);
      const username = decoded.username;

      if (!this.state.liked) {
        Axios.post("http://localhost:5000/users/addToFavorite", {
          activitiesId,
          username
        })
          .then(res => {
            console.log("fav", res);
          })
          .catch(err => {
            console.log(err.response);
          });
      } else {
        ????
      }



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
        <button onClick={this.incrementLikes} onClick={this.handleClick}>
          <img className="LikeButton" src={like} alt="like"></img> 
          Likes: {this.state.count}
        </button>
      </div>
    );
  }
}
