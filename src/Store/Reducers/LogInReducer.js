import { FETCH_LOGIN_SUCCESS } from "../ActionTypes";

const initialState = {
  isLoggedIn: false,
  isError: false,
  token: ""
};
export default (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isError: false,
        token: action.payload.token
      };
    default:
      return state;
  }
};
