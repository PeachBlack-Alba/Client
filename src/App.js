import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Landing from "./components/Landing";
import CitiesPage from "./components/CitiesPage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/citiesPage" component={CitiesPage} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/logIn" component={LogIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
