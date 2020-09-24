import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import ArtistAuthContainer from "./ArtistAuthContainer";
import VenueAuthContainer from "./VenueAuthContainer";

import "../css/AuthContainer.css";

export default function AuthContainer({ loginArtist, loginVenue }) {
  return (
    <Router>
      <div className="artist-or-venue">
        <h3>
          <Link to="/artist"> Artists</Link>
        </h3>
        <h3>
          <Link to="/venue"> Venues </Link>
        </h3>
      </div>
      <Switch>
        <Route exact path="/artist">
          <ArtistAuthContainer loginArtist={loginArtist} />
        </Route>
        <Route exact path="/venue">
          <VenueAuthContainer loginVenue={loginVenue} />
        </Route>
      </Switch>
    </Router>
  );
}
