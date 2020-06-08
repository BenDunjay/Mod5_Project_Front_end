import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import ArtistSearchPage from "./ArtistSearchPage";

export default function VenueAppContainer() {
  return (
    <Router>
      <div className="App">
        <h3>
          <Link to="/profile"> Profile </Link>
        </h3>
        <h3>
          <Link to="/all_artists"> All Artists </Link>
        </h3>
        <h3>
          <Link to="/edit_profile"> Edit Profile </Link>
        </h3>
        <h3>
          <Link to="/logout"> Logout </Link>
        </h3>

        <Switch>
          <Route exact path="/all_artists">
            <ArtistSearchPage />
          </Route>
          <Route exact path="/edit_profile"></Route>
          <Route exact path="/profile"></Route>
          <Route exact path="/logout"></Route>
        </Switch>
      </div>
    </Router>
  );
}
