import {
  FETCH_CITIES_REQUESTED,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR
} from "../Actions/CityActions";

const initialState = {
  isLoading: false,
  isError: false,
  data: { cities }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_CITIES_SUCCESS:
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

export const getCities = state => state.data;
export const getCitiesLoading = state => state.isLoading;
export const getCitiesError = state => state.isError;
