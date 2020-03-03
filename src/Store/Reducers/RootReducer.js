import { combineReducers } from "redux";
import citiesReducer from "./CitiesReducer";
import itinerariesReducer from "./ItineraryReducer";
import signUpReducer from "./SignUpReducer";
import LogInReducer from "./LogInReducer";
const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itinerariesReducer,
  signUp: signUpReducer,
  logIn: LogInReducer
});
export default rootReducer;
