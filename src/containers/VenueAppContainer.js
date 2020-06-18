import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import ArtistSearchPage from "./ArtistSearchPage";
import Home from "../components/Home";
import SelectedArtistProfile from "../components/SelectedArtistProfile";
import ManageVenueBookings from "../components/ManageVenueBookings.js";
import BookingForm from "../components/BookingForm";

import { Menu } from "semantic-ui-react";

export default function VenueAppContainer(props) {
  return (
    <Router>
      <Menu>
        <Menu.Item>
          <Link to="/"> Home </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile"> Profile </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/all_artists"> All Artists </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/manage_bookings"> Manage Bookings </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/edit_profile"> Edit Profile </Link>
        </Menu.Item>
        <Menu.Item position="right" style={color}>
          <Link onClick={props.logout}> Logout </Link>
        </Menu.Item>
      </Menu>

      <Switch>
        <Route exact path="/all_artists">
          <ArtistSearchPage />
        </Route>
        <Route exact path="/manage_bookings">
          <ManageVenueBookings />
        </Route>
        <Route exact path="/edit_profile"></Route>
        <Route exact path="/profile"></Route>
        <Route
          path="/artist_profile/:artistname"
          render={(routerProps) => <SelectedArtistProfile {...routerProps} />}
        />
        <Route
          path="/booking_form/:availability_id"
          render={(routerProps) => <BookingForm {...routerProps} />}
        />
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const color = {
  backgroundColor: "lightgrey",
};
