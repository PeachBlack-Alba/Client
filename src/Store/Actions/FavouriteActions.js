import axios from "axios";

export const addFavorite = favorite => dispatch => {
  axios
    .post("http://localhost:5000/logIn/addFavourite", favorite)
    .then(dispatch(xxxxx))
    .catch(err => {
      console.log(err);
    });
};
