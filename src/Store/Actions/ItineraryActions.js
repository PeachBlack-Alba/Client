import {
  FETCH_ITINERARIES_REQUESTED,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_ERROR
} from "../ActionTypes";
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
