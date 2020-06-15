import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import ArtistAuthContainer from "./ArtistAuthContainer";
import VenueAuthContainer from "./VenueAuthContainer";

export default function AuthContainer({ loginArtist, loginVenue }) {
  return (
    <div>
      <Router>
        <div className="App">
          <h3>
            <Link to="/artist"> Artists</Link>
          </h3>
          <h3>
            <Link to="/venue"> Venues </Link>
          </h3>

          <Switch>
            <Route exact path="/artist">
              <ArtistAuthContainer loginArtist={loginArtist} />
            </Route>
            <Route exact path="/venue">
              <VenueAuthContainer loginVenue={loginVenue} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
