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
    // this.incrementLikes();
  }
  // all variables(usename, itiID), si es logged in, despues axios post y cuando tenemos res change state

  addToFav() {
    const user = this.props.logIn.user;
    const itiID = this.props.itinerary._id;
    if (user) {
      console.log(user);
      const userID = user.id;

      this.props.addToFavorite(itiID, userID);
      // axios
      //   .post("http://localhost:5000/itineraries/addToFavorite", {
      //     itiID,
      //     userID
      //   })
      //   .then(res => {
      //     console.log("fav", res);
      //     if (res.status === 200) {
      //       this.setState({
      //         liked: !this.state.liked
      //       });
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err.response);
      //   });
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
    const userID = this.props.logIn.user.id;
    console.log("this.props.itinerary :", this.props.itinerary);
    if (this.props.itinerary.favourites.includes(userID)) return true;
    else return false;
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
  addToFavorite: (itiID, userID) => dispatch(addToFavorite(itiID, userID))
});

export default connect(mapStateToProps, mapDispatchToProps)(Likebutton);
