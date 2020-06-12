import React, { Component } from "react";
import { Table } from "semantic-ui-react";

import Request from "./Request";

export default class ManageArtistBookings extends Component {
  displayBookings = () => {
    return this.props.artist.requests.map((request) => (
      <Request request={request} key={request.id} />
    ));
  };

  render() {
    return (
      <div>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Request Id</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Venue Name</Table.HeaderCell>
              <Table.HeaderCell>Hours Needed</Table.HeaderCell>
              <Table.HeaderCell>Payment Offer</Table.HeaderCell>
              <Table.HeaderCell>Venue message</Table.HeaderCell>
              <Table.HeaderCell>Accept?</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{this.displayBookings()}</Table.Body>
        </Table>
      </div>
    );
  }
}
