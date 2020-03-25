import {
  FETCH_ITINERARIES_REQUESTED,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_ERROR,
  ADD_FAV_SUCCESS
} from "../ActionTypes";
import axios from "axios";

export const fetchItineraries = city_id => dispatch => {
  console.log("in fetch itineraries action");
  dispatch(fetchItinerariesRequested());

  fetch(`http://localhost:5000/itineraries/${city_id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch(fetchItinerariesSuccess(data));
    })
    .catch(error => {
      dispatch(fetchItinerariesError(error));
    });
};

// Importing constants

const fetchItinerariesRequested = () => {
  return {
    type: FETCH_ITINERARIES_REQUESTED
  };
};

const fetchItinerariesSuccess = data => {
  return {
    type: FETCH_ITINERARIES_SUCCESS,
    payload: data
  };
};

const fetchItinerariesError = error => {
  return {
    type: FETCH_ITINERARIES_ERROR,
    payload: error
  };
};
export const addToFavorite = (
  itiID,
  userID,
  activityname,
  cityID
) => dispatch => {
  console.log(activityname);
  axios
    .post("http://localhost:5000/activity/addtoFavourite", {
      itiID,
      userID,
      activityname
    })
    .then(res => {
      if (res.status === 200) {
        console.log(res);
        dispatch(fetchItineraries(cityID));
        //dispatch(addToFavSuccess());
      }
    })
    .catch(err => {
      console.log(err.response);
    });
};

const addToFavSuccess = () => {
  return {
    type: ADD_FAV_SUCCESS
  };
};
