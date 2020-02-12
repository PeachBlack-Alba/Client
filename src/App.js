import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cities from "./components/Cities";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/" component={Cities} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
