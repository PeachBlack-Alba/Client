import { FETCH_SIGNUP_SUCCESS, FETCH_SIGNUP_ERROR } from "../ActionTypes";
import Axios from "axios";

export default function signUpUser(user) {
  return dispatch => {
    console.log("signUpUser");
    console.log(user);
    Axios.post("http://localhost:5000/signUp/signUp", {
      picture: user.picture,
      username: user.username,
      email: user.email,
      password: user.password,
      passwordRepeat: user.passwordRepeat,
      isSignUp: user.isSignUp,
      isError: user.isError
    })
      .then(res => {
        console.log(res);
        dispatch(signUpSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(signUpFail(err));
      });
  };
}

// importing constants

const signUpSuccess = data => {
  return {
    type: FETCH_SIGNUP_SUCCESS,
    isSignUp: true
  };
};

const signUpFail = error => {
  return {
    type: FETCH_SIGNUP_ERROR,
    isSignUp: false,
    error: true
  };
};
