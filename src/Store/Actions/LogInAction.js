import { FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR } from "../ActionTypes";
import Axios from "axios";
//import jwt_decode from "jwt-decode";
import React from "react";

export function loginAction(email, password) {
  return dispatch => {
    console.log(password);
    Axios.post("http://localhost:5000/logIn/logIn", {
      email: email,
      password: password
    }).then(data => {
      dispatch(loginSuccess(data));
    });
  };
}
const loginSuccess = data => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: data
  };
};
