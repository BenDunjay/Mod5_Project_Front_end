import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import SignUpArtist from "../components/SignUpArtist";
import ArtistLogin from "../components/ArtistLogin";

export default function ArtistAuthContainer({ loginArtist }) {
  return (
    <div style={artists}>
      <Router>
        <h3>
          <Link to="/signup/artist" style={color}>
            {" "}
            Sign Up Artist
          </Link>
        </h3>
        <h3>
          <Link to="/artist_login" style={color}>
            {" "}
            Artist Log In{" "}
          </Link>
        </h3>

        <Switch>
          <Route exact path="/signup/artist">
            <SignUpArtist />
          </Route>
          <Route exact path="/artist_login">
            <ArtistLogin loginArtist={loginArtist} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const artists = {
  position: "fixed",
  top: "31%",
  left: "25%",
};

const color = {
  color: "lightgrey",
};
