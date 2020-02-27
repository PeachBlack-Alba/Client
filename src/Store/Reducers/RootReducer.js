import { combineReducers } from "redux";
import citiesReducer from "./CitiesReducer";
import itinerariesReducer from "./ItineraryReducer";
const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itinerariesReducer,
  signUp: signUpReducer
});
export default rootReducer;
