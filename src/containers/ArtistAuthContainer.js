import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import SignUpArtist from "../components/SignUpArtist";
import ArtistLogin from "../components/ArtistLogin";

import "../css/ArtistAuthContainer.css";

export default function ArtistAuthContainer({ loginArtist }) {
  const [isPrimaryDiv, setIsPrimaryDiv] = useState(true);
  return (
    <div>
      <Router>
        <div
          className={
            isPrimaryDiv ? "artist-auth-primary" : "artist-auth-secondary"
          }
          onClick={() => setIsPrimaryDiv(true)}
        >
          <h3>
            <Link to="/signup"> Sign Up Artist</Link>
          </h3>
        </div>
        <div
          className={
            isPrimaryDiv ? "artist-auth-secondary" : "artist-auth-primary"
          }
          onClick={() => setIsPrimaryDiv(false)}
        >
          <h3>
            <Link to="/login"> Artist Log In </Link>
          </h3>
        </div>

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
