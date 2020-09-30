import React from "react";
import { Table, Icon } from "semantic-ui-react";
import moment from "moment";

import "../css/Request.css";

export default function Request({ request, changeAcceptStatus }) {
  const showAcceptReject = () => {
    if (request.accept === true) {
      return null;
    } else if (request.accept === false) {
      return null;
    } else {
      return (
        <Table.Cell>
          <button onClick={(e) => changeAcceptStatus(e, request)}>
            Accept
          </button>
          <button onClick={(e) => changeAcceptStatus(e, request)}>
            Reject
          </button>
        </Table.Cell>
      );
    }
  };

  const tickOrCross = () => {
    if (request.accept === true) {
      return "✔";
    } else if (request.accept === false) {
      return <Icon name="x"></Icon>;
    } else {
      return showAcceptReject();
    }
  };

  return (
    <Table.Row>
      <Table.Cell className="artist-booking-table-cell">
        {request.id}
      </Table.Cell>
      <Table.Cell className="artist-booking-table-cell">
        {request.date}
      </Table.Cell>
      <Table.Cell className="artist-booking-table-cell">
        {request.name}
      </Table.Cell>
      <Table.Cell className="artist-booking-table-cell">
        {request.postcode}
      </Table.Cell>
      <Table.Cell className="artist-booking-table-cell">
        {moment(request.start_time).format("LT")}
      </Table.Cell>
      <Table.Cell className="artist-booking-table-cell">
        {request.number_of_hours}
      </Table.Cell>
      <Table.Cell className="artist-booking-table-cell">
        {request.payment}
      </Table.Cell>
      <Table.Cell> Brief Message</Table.Cell>
      <Table.Cell className="artist-booking-table-cell">
        {request.phone_number}
      </Table.Cell>
      <Table.Cell className="artist-booking-table-cell">
        {" "}
        {tickOrCross()}
      </Table.Cell>
    </Table.Row>
  );
}
