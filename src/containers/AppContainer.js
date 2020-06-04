import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Logout from "../components/Logout";

export default function AppContainer() {
  return (
    <Router>
      <div className="App">
        <h3>
          <Link to="/"> Home </Link>
        </h3>
        <h3>
          <Link to="/logout"> Logout </Link>
        </h3>

        <Switch>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
