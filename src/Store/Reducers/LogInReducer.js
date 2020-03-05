import { FETCH_LOGIN_SUCCESS } from "../ActionTypes";
import { FETCH_LOGIN_ERROR } from "../ActionTypes";
import { FETCH_LOGOUT_SUCCESS } from "../ActionTypes";

const initialState = {
  isLoggedIn: false,
  isError: false,
  user: null,
  message: ""
};
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isError: false,
        user: action.user
        //message: action.message
      };
    case FETCH_LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isError: true,
        user: null
        //message: action.message
      };
    case FETCH_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isError: false,
        user: null
        //message: action.message
      };
    default:
      return state;
  }
};
