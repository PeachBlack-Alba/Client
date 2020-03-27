import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Landing from "./components/Landing";
import CitiesPage from "./components/CitiesPage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Itinerary from "./components/Itinerary";
import { loginSuccess } from "./Store/Actions/LogInAction";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";

import React, { Component } from "react";

class App extends Component {
  checkIfUserIsLoggedIn() {
    const token = localStorage.getItem("token");
    if (token !== null) {
      this.props.loginSuccess(token);
      // } else if (window.location.replace("/")) {
    }
  }
  componentDidMount() {
    this.checkIfUserIsLoggedIn();
  }
  render() {
    return (
      <BrowserRouter>
        <Container>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/citiesPage" component={CitiesPage} />
              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/logIn" component={LogIn} />
              <Route exact path="/itineraries/:city" component={Itinerary} />
            </Switch>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => ({
  loginSuccess: token => dispatch(loginSuccess(token))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
