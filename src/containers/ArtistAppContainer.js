import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Logout from "../components/Logout";
import ArtistProfile from "../components/ArtistProfile";
import EditArtistProfile from "../components/EditArtistProfile";

export default function ArtistAppContainer(props) {
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
          <Link to="/edit_profile"> Edit Profile </Link>
        </h3>
        <h3>
          <Link to="/logout"> Logout </Link>
        </h3>

        <Switch>
          <Route exact path="/edit_profile">
            <EditArtistProfile artist={props.artist} />
          </Route>
          <Route exact path="/profile">
            <ArtistProfile artist={props.artist} />
          </Route>
          <Route exact path="/logout">
            <Logout logout={props.logout} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
