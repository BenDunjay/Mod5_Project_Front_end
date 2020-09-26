import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import ArtistAuthContainer from "./ArtistAuthContainer";
import VenueAuthContainer from "./VenueAuthContainer";

import "../css/AuthContainer.css";

export default function AuthContainer({ loginArtist, loginVenue }) {
  const [artistIsClicked, setArtistIsClicked] = useState(false);
  const [venueIsClicked, setVenueIsClicked] = useState(false);
  return (
    <Router>
      {venueIsClicked === false && artistIsClicked === false ? (
        <div className="artist-or-venue">
          <h3>
            {" "}
            <Link onClick={() => setArtistIsClicked(true)}>Artists</Link>
          </h3>
          <h3>
            <Link onClick={() => setVenueIsClicked(true)}> Venues </Link>
          </h3>{" "}
        </div>
      ) : null}
      {artistIsClicked ? (
        <div>
          <ArtistAuthContainer loginArtist={loginArtist} />{" "}
        </div>
      ) : null}
      {venueIsClicked ? (
        <div>
          <VenueAuthContainer loginVenue={loginVenue} />
        </div>
      ) : null}
    </Router>
  );
}

{
  /* <Switch>
  <Route exact path="/artist">
    <ArtistAuthContainer loginArtist={loginArtist} />
  </Route>
  <Route exact path="/venue">
    <VenueAuthContainer loginVenue={loginVenue} />
  </Route>
</Switch> */
}
