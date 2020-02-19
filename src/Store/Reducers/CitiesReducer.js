import {
  FETCH_CITIES_REQUESTED,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR
} from "../ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cities: []
};
export default (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_CITIES_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_CITIES_SUCCESS:
      console.log("cities are fetched");
      return {
        ...state,
        isLoading: false,
        cities: action.payload
      };
    case FETCH_CITIES_ERROR:
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
export const getCities = state => state.cities;
export const getCitiesLoading = state => state.isLoading;
export const getCitiesError = state => state.isError;
