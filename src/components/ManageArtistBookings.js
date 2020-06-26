import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import API from "../API";

import Request from "./Request";

export default class ManageArtistBookings extends Component {
  state = {
    bookings: [],
    requests: [],
    rejected: [],
  };

  componentDidMount = () => {
    API.fetchBookings().then((data) => {
      this.setState({
        bookings: data.accepted,
        requests: data.pending,
        rejected: data.rejected,
      });
    });
  };

  changeAcceptStatus = (e, requestObject) => {
    console.log(e.target);
    if (e.target.innerText === "Accept") {
      API.acceptOrReject(requestObject, true).then(() =>
        this.addToBookings(requestObject)
      );
    } else {
      API.acceptOrReject(requestObject, false).then(() =>
        this.addToReject(requestObject)
      );
    }
  };

  addToReject = (booking) => {
    const newBooking = this.state.requests.find(
      (request) => request.id === booking.id
    );
    newBooking.accept = false;
    const newRequests = this.state.requests.filter(
      (request) => request.id !== booking.id
    );
    this.setState({
      rejected: [...this.state.rejected, newBooking],
      requests: newRequests,
    });
  };

  addToBookings = (booking) => {
    const newBooking = this.state.requests.find(
      (request) => request.id === booking.id
    );
    newBooking.accept = true;

    const newRequests = this.state.requests.filter(
      (request) => request.id !== booking.id
    );
    this.setState({
      bookings: [...this.state.bookings, newBooking],
      requests: newRequests,
    });
  };

  confirmedBookings = () => {
    return this.state.bookings.map((request) => (
      <Request request={request} key={request.id} />
    ));
  };

  pendingRequests = () => {
    return this.state.requests.map((request) => (
      <Request
        request={request}
        key={request.id}
        changeAcceptStatus={this.changeAcceptStatus}
      />
    ));
  };

  rejectedBookings = () => {
    return this.state.rejected.map((request) => (
      <Request request={request} key={request.id} />
    ));
  };

  render() {
    return (
      <div>
        <h3 style={title}> Pending Bookings</h3>
        <div style={table} style={trial}>
          <Table striped color={"orange"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Request Id</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Venue Name</Table.HeaderCell>
                <Table.HeaderCell>Postcode</Table.HeaderCell>
                <Table.HeaderCell>Start Time</Table.HeaderCell>
                <Table.HeaderCell>Hours Needed</Table.HeaderCell>
                <Table.HeaderCell>Payment Offer</Table.HeaderCell>
                <Table.HeaderCell>Venue message</Table.HeaderCell>
                <Table.HeaderCell>Phone Number</Table.HeaderCell>
                <Table.HeaderCell>Accept?</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>{this.pendingRequests()}</Table.Body>
          </Table>
        </div>
        <hr></hr>
        <h3 style={title}> Accepted / UpComing Bookings</h3>
        <div style={table} style={trial}>
          <Table striped color={"red"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Request Id</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Venue Name</Table.HeaderCell>
                <Table.HeaderCell>Postcode</Table.HeaderCell>
                <Table.HeaderCell>Start Time</Table.HeaderCell>
                <Table.HeaderCell>Hours Needed</Table.HeaderCell>
                <Table.HeaderCell>Payment Offer</Table.HeaderCell>
                <Table.HeaderCell>Venue message</Table.HeaderCell>
                <Table.HeaderCell>Phone Number</Table.HeaderCell>
                <Table.HeaderCell>Accept?</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>{this.confirmedBookings()}</Table.Body>
          </Table>
        </div>
        <hr></hr>
        <h3 style={title}> Rejected Bookings</h3>
        <div style={table} style={trial}>
          <Table striped color={"yellow"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Request Id</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Venue Name</Table.HeaderCell>
                <Table.HeaderCell>Postcode</Table.HeaderCell>
                <Table.HeaderCell>Start Time</Table.HeaderCell>
                <Table.HeaderCell>Hours Needed</Table.HeaderCell>
                <Table.HeaderCell>Payment Offer</Table.HeaderCell>
                <Table.HeaderCell>Venue message</Table.HeaderCell>
                <Table.HeaderCell>Phone Number</Table.HeaderCell>
                <Table.HeaderCell>Accept?</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>{this.rejectedBookings()}</Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

const table = {
  margin: "20px",
};

const title = {
  textAlign: "center",
};

const trial = {
  overflow: "scroll",
  maxHeight: "500px",
};
