import React, { Component } from "react";
import axios from "axios";
import noLiked from "../images/noLiked.png";
import liked from "../images/Liked.png";
import { connect } from "react-redux";
import { addToFavorite } from "../Store/Actions/ItineraryActions";

class Likebutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.addToFav();
    this.incrementLikes();
  }

  addToFav() {
    const user = this.props.logIn.user;
    const itiID = this.props.itinerary._id;
    const activityname = this.props.activity.name;
    const cityID = this.props.cityID;
    if (user) {
      const userID = user.id;

      this.props.addToFavorite(itiID, userID, activityname, cityID);
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
  isLiked() {
    if (this.props.logIn.isLoggedIn === true) {
      const userID = this.props.logIn.user.id;
      if (this.props.activity.favourites.includes(userID)) return true;
    } else return false;
  }

  render() {
    return (
      <div>
        {this.isLiked() ? (
          <button>
            <img className="LikeButton" src={liked} alt="like"></img>
            Likes: {this.props.itinerary.favourites.length}
          </button>
        ) : (
          <button onClick={this.handleClick}>
            <img className="LikeButton" src={noLiked} alt="like"></img>
            Likes: {this.props.itinerary.favourites.length}
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logIn: state.logIn,
    itineraries: state.itineraries
  };
};
const mapDispatchToProps = dispatch => ({
  addToFavorite: (itiID, userID, activityname, cityID) =>
    dispatch(addToFavorite(itiID, userID, activityname, cityID))
});

export default connect(mapStateToProps, mapDispatchToProps)(Likebutton);
