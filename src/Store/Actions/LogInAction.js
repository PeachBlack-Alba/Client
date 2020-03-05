import {
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
  FETCH_LOGOUT_SUCCESS
} from "../ActionTypes";
import Axios from "axios";
import jwt_decode from "jwt-decode";

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
        const decoded = jwt_decode(data.token);
        localStorage.setItem("token", data.data.token);
        dispatch(loginSuccess(data, decoded));
      })
      .catch(err => {
        console.log(err.response);
        dispatch(loginError(err.response));
      });
  };
}

// Importing constants

export function loginSuccess(data) {
  const decoded = jwt_decode(data.token);

  return {
    type: "FETCH_LOGIN_SUCCESS",
    success: true,
    isLoggedIn: true,
    isError: false,
    username: decoded.username,
    token: data.payload.token
  };
}

export function loginError(data) {
  return {
    type: "FETCH_LOGIN_ERROR",
    isLoggedIn: false,
    isError: true,
    email: null
  };
}

export function logOut(data) {
  localStorage.clear();
  return {
    type: "LOG_OUT",
    isLoggedIn: false,
    error: false,
    email: null
  };
}
