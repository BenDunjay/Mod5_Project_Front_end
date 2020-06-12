import React, { Component } from "react";
import { Table } from "semantic-ui-react";

import Request from "./Request";

export default class ManageArtistBookings extends Component {
  displayPendingBookings = () => {
    return this.props.artist.requests.map((request) => {
      if (request.accept === null) {
        return <Request request={request} key={request.id} />;
      }
    });
  };

  displayAcceptedBookings = () => {
    return this.props.artist.requests.map((request) => {
      if (request.accept === true) {
        return <Request request={request} key={request.id} />;
      }
    });
  };

  displayRejectedBookings = () => {
    return this.props.artist.requests.map((request) => {
      if (request.accept === false) {
        return <Request request={request} key={request.id} />;
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <h3> Pending Bookings</h3>
          <Table striped color={"red"}>
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

            <Table.Body>{this.displayPendingBookings()}</Table.Body>
          </Table>
        </div>
        <div>
          <h3> Accepted / UpComing Bookings</h3>
          <Table striped color={"red"}>
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

            <Table.Body>{this.displayAcceptedBookings()}</Table.Body>
          </Table>
        </div>
        <div>
          <h3> Rejected Bookings</h3>
          <Table striped color={"red"}>
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

            <Table.Body>{this.displayRejectedBookings()}</Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}
