import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import VenueLogin from "../components/VenueLogin";
import SignUpVenue from "../components/SignUpVenue";

import "../css/VenueAuthContainer.css";

export default function VenueAuthContainer({ loginVenue }) {
  return (
    <div className="venue-auth-container">
      <Router>
        <h3>
          <Link to="/signup"> Sign Up Venue</Link>
        </h3>
        <h3>
          <Link to="/login"> Venue Log In </Link>
        </h3>
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
