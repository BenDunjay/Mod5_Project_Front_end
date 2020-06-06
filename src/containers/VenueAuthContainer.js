import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import VenueLogin from "../components/VenueLogin";
import SignUpVenue from "../components/SignUpVenue";

export default function VenueAuthContainer({ loginVenue }) {
  return (
    <div>
      <Router>
        <h3>
          <Link to="/signup/venue"> Sign Up Venue</Link>
        </h3>
        <h3>
          <Link to="/venue_login"> Venue Log In </Link>
        </h3>
        <Switch>
          <Route exact path="/signup/venue">
            <SignUpVenue />
          </Route>
          <Route exact path="/venue_login">
            <VenueLogin loginVenue={loginVenue} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
