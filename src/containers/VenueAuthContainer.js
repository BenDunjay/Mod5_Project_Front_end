import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import VenueLogin from "../components/VenueLogin";
import SignUpVenue from "../components/SignUpVenue";

import "../css/VenueAuthContainer.css";

export default function VenueAuthContainer({ loginVenue }) {
  const [isPrimaryDiv, setIsPrimaryDiv] = useState(true);

  return (
    <div className="login-or-signup">
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
              Sign Up Venue
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
              Venue Log In{" "}
            </Link>
          </h3>
        </div>
        <Switch>
          <Route exact path="/signup">
            <SignUpVenue />
          </Route>
          <Route exact path="/login">
            <VenueLogin loginVenue={loginVenue} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
