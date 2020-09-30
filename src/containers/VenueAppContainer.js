import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import ArtistSearchPage from "./ArtistSearchPage";
import Home from "../components/Home";
import SelectedArtistProfile from "../components/SelectedArtistProfile";
import ManageVenueBookings from "../components/ManageVenueBookings.js";
import BookingForm from "../components/BookingForm";

import { Menu } from "semantic-ui-react";

import "../css/VenueNavBar.css";

export default class VenueAppContainer extends Component {
  render() {
    return (
      <Router>
        <Menu className="venue-navbar">
          <Menu.Item className="navbar-venue-section">
            <Link to="/" className="navbar-venue-link">
              {" "}
              AVB{" "}
            </Link>
          </Menu.Item>
          <Menu.Item className="navbar-venue-section">
            <Link to="/profile" className="navbar-venue-link">
              {" "}
              Profile{" "}
            </Link>
          </Menu.Item>
          <Menu.Item className="navbar-venue-section">
            <Link to="/all_artists" className="navbar-venue-link">
              {" "}
              All Artists{" "}
            </Link>
          </Menu.Item>
          <Menu.Item className="navbar-venue-section">
            <Link to="/manage_bookings" className="navbar-venue-link">
              {" "}
              Manage Bookings{" "}
            </Link>
          </Menu.Item>
          <Menu.Item className="navbar-venue-section">
            <Link to="/edit_profile" className="navbar-venue-link">
              {" "}
              Edit Profile{" "}
            </Link>
          </Menu.Item>
          <Menu.Item className="navbar-venue-section" position="right">
            <Link
              to="/"
              onClick={this.props.logout}
              className="navbar-venue-link"
            >
              {" "}
              Logout{" "}
            </Link>
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
}
