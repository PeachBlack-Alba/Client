import { FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR } from "../ActionTypes";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import React from "react";

export default function LogInAction(user) {
  return dispatch => {
    console.log("logInUser");
    console.log(user);
    Axios.post("http://localhost:5000/logIn/logIn", {
      email: user.email,
      password: user.password
    });
  };
}
