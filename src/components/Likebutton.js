import React, { Component } from "react";
import axios from "axios";
import noLiked from "../images/noLiked.png";
import { connect } from "react-redux";

class Likebutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // liked: this.props.liked,
      username: "",
      // activitiesId: this.props.activities.id,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props);
    this.addToFav();
    this.incrementLikes();
  }
  // all variables(usename, itiID), si es logged in, despues axios post y cuando tenemos res change state

  addToFav() {
    const user = this.props.logIn.user;
    const itiID = this.props.itiID;
    if (user) {
      console.log(user);
      const userID = user.id;
      axios
        .post("http://localhost:5000/itineraries/addToFavorite", {
          itiID,
          userID
        })
        .then(res => {
          console.log("fav", res);
          if (res.status === 200) {
            this.setState({
              liked: !this.state.liked
            });
          }
        })
        .catch(err => {
          console.log(err.response);
        });
    } else {
      alert("You need to be logged in!");
    }
  }

  incrementLikes() {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <img className="LikeButton" src={noLiked} alt="like"></img>
          Likes: {this.state.count}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { logIn: state.logIn };
};

export default connect(mapStateToProps)(Likebutton);
