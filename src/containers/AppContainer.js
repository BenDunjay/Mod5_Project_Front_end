import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Logout from "../components/Logout";
import ArtistProfile from "../components/ArtistProfile";

export default function AppContainer({ logoutArtist }) {
  return (
    <Router>
      <div className="App">
        <h3>
          <Link to="/"> Home </Link>
        </h3>
        <h3>
          <Link to="/profile"> Profile </Link>
        </h3>
        <h3>
          <Link to="/logout"> Logout </Link>
        </h3>

        <Switch>
          <Route exact path="/profile">
            <ArtistProfile />
          </Route>
          <Route exact path="/logout">
            <Logout logoutArtist={logoutArtist} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
