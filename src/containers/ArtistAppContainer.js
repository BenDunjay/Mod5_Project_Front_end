import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import ArtistProfile from "../components/ArtistProfile";
import EditArtistProfile from "../components/EditArtistProfile";
import ManageArtistBookings from "../components/ManageArtistBookings";

import { Menu } from "semantic-ui-react";

export default function ArtistAppContainer(props) {
  return (
    <Router>
      <Menu>
        <Menu.Item className="menu-container">
          <Link to="/"> Home </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile"> Profile </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/edit_profile"> Edit Profile </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/manage_bookings"> Manage Bookings </Link>
        </Menu.Item>
        <Menu.Item position="right">
          <Link onClick={props.logout}> Logout </Link>
        </Menu.Item>
      </Menu>

      <Switch>
        <Route exact path="/edit_profile">
          <EditArtistProfile artist={props.artist} />
        </Route>
        <Route exact path="/manage_bookings">
          <ManageArtistBookings artist={props.artist} />
        </Route>
        <Route exact path="/profile">
          <ArtistProfile artist={props.artist} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
