import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import ArtistProfile from "../components/ArtistProfile";
import EditArtistProfile from "../components/EditArtistProfile";
import ManageArtistBookings from "../components/ManageArtistBookings";

import { Menu } from "semantic-ui-react";
import "../css/ArtistNavBar.css";

export default function ArtistAppContainer(props) {
  return (
    <Router>
      <Menu className="artist-navbar">
        <Menu.Item className="navbar-artist-section">
          <Link to="/"> AVB </Link>
        </Menu.Item>
        <Menu.Item className="navbar-artist-section">
          <Link to="/profile"> Profile </Link>
        </Menu.Item>
        <Menu.Item className="navbar-artist-section">
          <Link to="/edit_profile"> Edit Profile </Link>
        </Menu.Item>
        <Menu.Item className="navbar-artist-section">
          <Link to="/manage_bookings"> Manage Bookings </Link>
        </Menu.Item>
        <Menu.Item className="navbar-artist-section-logout" position="right">
          <Link onClick={props.logout} to="/">
            {" "}
            Logout{" "}
          </Link>
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
