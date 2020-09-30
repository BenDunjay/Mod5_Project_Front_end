import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import API from "../API";

import Request from "./Request";

import "../css/ManageArtistBookings.css";

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
      <div className="manage-bookings-div">
        <div className="inner-manage-bookings-div">
          <h3 className="manage-artist-bookings-labels"> Pending Bookings</h3>
          <div className="manage-booking-table">
            <Table striped color={"orange"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell className="table-header">
                    Request Id
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Date
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Venue Name
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Postcode
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Start Time
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Hours Needed
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Payment Offer
                  </Table.HeaderCell>
                  <Table.HeaderCell>Venue message</Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Phone Number
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Accept?
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>{this.pendingRequests()}</Table.Body>
            </Table>
          </div>
          <h3 className="manage-artist-bookings-labels">
            {" "}
            Accepted / UpComing Bookings
          </h3>
          <div className="manage-booking-table">
            <Table striped color={"red"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell className="table-header">
                    Request Id
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Date
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Venue Name
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Postcode
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Start Time
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Hours Needed
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Payment Offer
                  </Table.HeaderCell>
                  <Table.HeaderCell>Venue message</Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Phone Number
                  </Table.HeaderCell>
                  <Table.HeaderCell>Accept?</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>{this.confirmedBookings()}</Table.Body>
            </Table>
          </div>
          <h3 className="manage-artist-bookings-labels"> Rejected Bookings</h3>
          <div className="manage-booking-table">
            <Table striped color={"yellow"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell className="table-header">
                    Request Id
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Date
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Venue Name
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Postcode
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Start Time
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Hours Needed
                  </Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Payment Offer
                  </Table.HeaderCell>
                  <Table.HeaderCell>Venue message</Table.HeaderCell>
                  <Table.HeaderCell className="table-header">
                    Phone Number
                  </Table.HeaderCell>
                  <Table.HeaderCell>Accept?</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>{this.rejectedBookings()}</Table.Body>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
