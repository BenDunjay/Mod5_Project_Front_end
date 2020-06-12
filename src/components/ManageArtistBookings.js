import React, { Component } from "react";

import Request from "./Request";

export default class ManageArtistBookings extends Component {
  displayBookings = () => {
    return this.props.artist.requests.map((request) => (
      <li>
        <Request request={request} />
      </li>
    ));
  };

  render() {
    return (
      <div>
        Hi from Artist Bookings
        <ul>{this.displayBookings()}</ul>
      </div>
    );
  }
}
