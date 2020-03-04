import {
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
  FETCH_LOGOUT_SUCCESS
} from "../ActionTypes";
import Axios from "axios";
// import jwt_decode from "jwt-decode";

import React from "react";

export function loginAction(email, password) {
  return dispatch => {
    console.log(password);
    Axios.post("http://localhost:5000/logIn/logIn", {
      email: email,
      password: password
    })
      .then(data => {
        console.log("data", data);

        dispatch(loginSuccess(data));
      })
      .catch(err => {
        console.log(err.response.data);
        dispatch(loginError(err.response.data));
      });
  };
}

// Importing constants

const loginSuccess = data => {
  localStorage.setItem("token", data.data.token);
  return {
    type: "FETCH_LOGIN_SUCCESS",
    success: true,
    isLoggedIn: true,
    isError: false
  };
};

const loginError = data => {
  return {
    type: "FETCH_LOGIN_ERROR",
    isLoggedIn: false,
    isError: true,
    email: null
  };
};

const logOut = data => {
  localStorage.clear();
  return {
    type: "LOG_OUT",
    isLoggedIn: false,
    error: false,
    email: null
  };
};
