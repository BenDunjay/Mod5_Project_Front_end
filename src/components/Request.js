import React from "react";
import { Table, Icon } from "semantic-ui-react";
import moment from "moment";

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
      <Table.Cell>{request.id}</Table.Cell>
      <Table.Cell>{request.date}</Table.Cell>
      <Table.Cell>{request.name}</Table.Cell>
      <Table.Cell>{request.postcode}</Table.Cell>
      <Table.Cell>{moment(request.start_time).format("LT")}</Table.Cell>
      <Table.Cell>{request.number_of_hours}</Table.Cell>
      <Table.Cell>{request.payment}</Table.Cell>
      <Table.Cell> Brief Message</Table.Cell>
      <Table.Cell>{request.phone_number}</Table.Cell>
      <Table.Cell> {tickOrCross()}</Table.Cell>
      {showAcceptReject()}
    </Table.Row>
  );
}
