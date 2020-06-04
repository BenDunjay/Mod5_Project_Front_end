import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import SignUpArtist from "../components/SignUpArtist";
import Login from "../components/Login";
import Home from "../components/Home";

export default function AuthContainer({ loginArtist }) {
  return (
    <div>
      <Router>
        <div className="App">
          <h3>
            <Link to="/"> Home </Link>
          </h3>
          <h3>
            <Link to="/signup"> Sign Up Artist</Link>
          </h3>
          <h3>
            <Link to="/artist_login"> Log In </Link>
          </h3>

          <Switch>
            <Route exact path="/signup">
              <SignUpArtist />
            </Route>
            <Route exact path="/artist_login">
              <Login loginArtist={loginArtist} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
