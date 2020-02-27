import { FETCH_SIGNUP_SUCCESS, FETCH_SIGNUP_ERROR } from "../ActionTypes";
import Axios from "axios";

export default function SignUpActions(user) {
  return dispatch => {
    Axios.post("http://localhost:5000/signUp", {
      picture: user.picture,
      username: user.username,
      email: user.email,
      password: user.password,
      passwordRepeat: user.passwordRepeat
    })
      .then(res => {
        console.log(res);
        dispatch(signUpSuccess(res.data));
      })
      .catch(err => {
        console.log(err.response.data);
        dispatch(signUpFail(err.response.data));
      });
  };
}

// importing constants

const signUpSuccess = data => {
  return {
    type: FETCH_SIGNUP_SUCCESS,
    payload: data
  };
};

const signUpFail = error => {
  return {
    type: FETCH_SIGNUP_ERROR,
    payload: error
  };
};
