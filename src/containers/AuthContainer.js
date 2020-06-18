import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import ArtistAuthContainer from "./ArtistAuthContainer";
import VenueAuthContainer from "./VenueAuthContainer";

export default function AuthContainer({ loginArtist, loginVenue }) {
  return (
    <div>
      <Router>
        <div style={styling}>
          <h1>AVB</h1>
          <div style={artists}>
            <h3>
              <Link to="/artist"> Artists</Link>
            </h3>
          </div>
          <div style={venues}>
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
        </div>
      </Router>
    </div>
  );
}

const styling = {
  backgroundColor: "lightblue",
  height: "100vh",
  textAlign: "center",
};

const artists = {
  position: "fixed",
  top: "25%",
  left: "25%",
};

const venues = {
  position: "fixed",
  top: "25%",
  left: "65%",
};
