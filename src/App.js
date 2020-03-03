import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Landing from "./components/Landing";
import CitiesPage from "./components/CitiesPage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Itinerary from "./components/Itinerary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/citiesPage" component={CitiesPage} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/logIn" component={LogIn} />
          <Route exact path="/itineraries/:city" component={Itinerary} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
// put a method in app.js to check if there is a token so we are logged in
// funcion App(props)
// To invalidate the token, just update the server-side value, and if iat is older than this, you can reject the token.
