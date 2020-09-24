import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import SignUpArtist from "../components/SignUpArtist";
import ArtistLogin from "../components/ArtistLogin";

import "../css/ArtistAuthContainer.css";

export default function ArtistAuthContainer({ loginArtist }) {
  return (
    <div className="artist-auth-container">
      <Router>
        <h3>
          <Link to="/signup"> Sign Up Artist</Link>
        </h3>
        <h3>
          <Link to="/login"> Artist Log In </Link>
        </h3>

        <Switch>
          <Route exact path="/signup">
            <SignUpArtist />
          </Route>
          <Route exact path="/login">
            <ArtistLogin loginArtist={loginArtist} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
