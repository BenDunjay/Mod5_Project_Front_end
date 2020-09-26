import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import SignUpArtist from "../components/SignUpArtist";
import ArtistLogin from "../components/ArtistLogin";

import "../css/ArtistAuthContainer.css";

export default function ArtistAuthContainer({ loginArtist }) {
  const [isPrimaryDiv, setIsPrimaryDiv] = useState(true);
  return (
    <div className="login-or-signup">
      <button>
        {" "}
        <Link to="/">Back </Link>
      </button>
      <Router>
        <div
          className={
            isPrimaryDiv ? "artist-auth-primary" : "artist-auth-secondary"
          }
          onClick={() => setIsPrimaryDiv(true)}
        >
          <h3>
            <Link to="/signup" className="signin-signup-links">
              {" "}
              Sign Up Artist
            </Link>
          </h3>
        </div>
        <div
          className={
            isPrimaryDiv ? "artist-auth-secondary" : "artist-auth-primary"
          }
          onClick={() => setIsPrimaryDiv(false)}
        >
          <h3>
            <Link to="/login" className="signin-signup-links">
              {" "}
              Artist Log In{" "}
            </Link>
          </h3>
        </div>

        <Switch>
          <Route exact path="/login">
            <ArtistLogin loginArtist={loginArtist} />
          </Route>
          <Route exact path="/signup">
            <SignUpArtist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
