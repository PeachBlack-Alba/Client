import { combineReducers } from "redux";
import citiesReducer from "./CitiesReducer";
const rootReducer = combineReducers({
  cities: citiesReducer
});
export default rootReducer;
