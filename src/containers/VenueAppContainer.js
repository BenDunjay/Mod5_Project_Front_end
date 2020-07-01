import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import ArtistSearchPage from "./ArtistSearchPage";
import Home from "../components/Home";
import SelectedArtistProfile from "../components/SelectedArtistProfile";
import ManageVenueBookings from "../components/ManageVenueBookings.js";
import BookingForm from "../components/BookingForm";

import { Menu } from "semantic-ui-react";

export default class VenueAppContainer extends Component {
  state = {
    activeItem: "all_artists",
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <Menu style={navbar} pointing>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <Link to="/"> AVB </Link>
          </Menu.Item>
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          >
            <Link to="/profile"> Profile </Link>
          </Menu.Item>
          <Menu.Item
            name="all_artists"
            active={activeItem === "all_artists"}
            onClick={this.handleItemClick}
          >
            <Link to="/all_artists"> All Artists </Link>
          </Menu.Item>
          <Menu.Item
            name="manage_bookings"
            active={activeItem === "manage_bookings"}
            onClick={this.handleItemClick}
          >
            <Link to="/manage_bookings"> Manage Bookings </Link>
          </Menu.Item>
          <Menu.Item
            name="edit_profile"
            active={activeItem === "edit_profile"}
            onClick={this.handleItemClick}
          >
            <Link to="/edit_profile"> Edit Profile </Link>
          </Menu.Item>
          <Menu.Item
            position="right"
            style={color}
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          >
            <Link onClick={this.props.logout}> Logout </Link>
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

const color = {
  backgroundColor: "lightgrey",
};

const navbar = {};
