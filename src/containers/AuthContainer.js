import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Background from "../FrontPhoto.jpg";

import ArtistAuthContainer from "./ArtistAuthContainer";
import VenueAuthContainer from "./VenueAuthContainer";

export default function AuthContainer({ loginArtist, loginVenue }) {
  return (
    <div>
      <Router>
        <div style={styling}>
          <div style={artists}>
            <h3>
              <Link to="/artist" style={color}>
                {" "}
                Artists
              </Link>
            </h3>
          </div>
          <div style={venues}>
            <h3>
              <Link to="/venue" style={color}>
                {" "}
                Venues{" "}
              </Link>
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
  height: "100vh",
  textAlign: "center",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
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

const color = {
  color: "lightgrey",
};
