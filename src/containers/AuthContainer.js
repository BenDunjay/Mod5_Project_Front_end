import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
          <h3 className="artist-entry">
            {" "}
            <Link
              onClick={() => setArtistIsClicked(!artistIsClicked)}
              className="link-to-venue-or-artist"
            >
              Artists
            </Link>
          </h3>
          <h3 className="venue-entry">
            <Link
              onClick={() => setVenueIsClicked(!venueIsClicked)}
              className="link-to-venue-or-artist"
            >
              {" "}
              Venues{" "}
            </Link>
          </h3>{" "}
        </div>
      ) : null}
      {artistIsClicked ? (
        <ArtistAuthContainer loginArtist={loginArtist} />
      ) : null}
      {venueIsClicked ? <VenueAuthContainer loginVenue={loginVenue} /> : null}
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
