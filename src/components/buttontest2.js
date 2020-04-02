import Button from "react-bootstrap/Button";
import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked,
      username: "",
      activitiesId: this.props.activities.id
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /* Check if user has favourites, post/remove from favourites*/
  handleClick() {
    const activitiesId = this.props.activities.id;

    this.setState({
      liked: !this.state.liked
    });

    const decoded = jwt_decode(localStorage.token);
    const username = decoded.username;

    if (!this.state.liked) {
      Axios.post(
        "https://queermeappbackend.herokuapp.com/users/addToFavorite",
        {
          activitiesId,
          username
        }
      )
        .then(res => {
          console.log("fav", res);
        })
        .catch(err => {
          console.log(err.response);
        });
    } else {
      Axios.post(
        "https://queermeappbackend.herokuapp.com/users/removeFromFavorite",
        {
          activitiesId,
          username
        }
      )
        .then(res => {
          console.log("fav", res);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }

  render() {
    const label = this.state.liked ? "Unlike" : "Like";

    return (
      <div className="customContainer">
        <Button
          className="btn btn-primary"
          style={{
            backgroundColor: "#23aa4e",
            borderColor: "#177d37"
          }}
          onClick={this.handleClick}
        >
          {label}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("Buttonredux", state)
  return { cityId: state.cityId, login: state.login };
};

export default connect(mapStateToProps)(LikeButton);
