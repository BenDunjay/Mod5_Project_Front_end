import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";

import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/"> Home </Link>
        <Link to="/signup"> Sign Up </Link>
        <Link to="/login"> Log In </Link>

        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/login">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
