import {
  FETCH_ITINERARIES_REQUESTED,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_ERROR
} from "../ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  itineraries: []
};
export default (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_ITINERARIES_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ITINERARIES_SUCCESS:
      console.log("itineraries are fetched");
      return {
        ...state,
        isLoading: false,
        itineraries: action.payload
      };
    case FETCH_ITINERARIES_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      // the dispatched action is not in this reducer, return the state unchanged

      return state;
  }
};

// Selectors
//Selectors are used to get defined parts of the state
//To change something within the state, change the selector
export const getItineraries = state => state.itineraries;
export const getItinerariesLoading = state => state.isLoading;
export const getItinerariesError = state => state.isError;
