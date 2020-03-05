import {
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
  FETCH_LOGOUT_SUCCESS
} from "../ActionTypes";
import Axios from "axios";
import React from "react";

const jwt_decode = require("jwt-decode");

export function loginAction(email, password) {
  return dispatch => {
    console.log(password);
    Axios.post("http://localhost:5000/logIn/logIn", {
      email: email,
      password: password
    })
      .then(data => {
        console.log("data", data);

        localStorage.setItem("token", data.data.token);
        dispatch(loginSuccess(data.data.token));
      })
      .catch(err => {
        console.log(err.response);
        dispatch(loginError(err.response));
      });
  };
}

// Exporting constants

export function loginSuccess(token) {
  const decoded = jwt_decode(token);
  return {
    type: "FETCH_LOGIN_SUCCESS",
    success: true,
    isLoggedIn: true,
    isError: false,
    user: decoded
  };
}

export function loginError(data) {
  return {
    type: "FETCH_LOGIN_ERROR",
    isLoggedIn: false,
    isError: true,
    user: null
  };
}

export function logOut(data) {
  localStorage.clear();
  return {
    type: "LOG_OUT",
    isLoggedIn: false,
    error: false,
    user: null
  };
}
