import React from "react";
import { Table } from "semantic-ui-react";

export default function Request({ request, changeAcceptStatus }) {
  const showAcceptReject = () => {
    if (request.accept === true) {
      return null;
    } else if (request.accept === false) {
      return null;
    } else {
      return (
        <p>
          <button onClick={(e) => changeAcceptStatus(e, request)}>
            Accept
          </button>
          <button onClick={(e) => changeAcceptStatus(e, request)}>
            Reject
          </button>
        </p>
      );
    }
  };

  return (
    <Table.Row>
      <Table.Cell>{request.id}</Table.Cell>
      <Table.Cell>{request.date}</Table.Cell>
      <Table.Cell>{request.name}</Table.Cell>
      <Table.Cell>{request.postcode}</Table.Cell>
      <Table.Cell>{request.start_time}</Table.Cell>
      <Table.Cell>{request.number_of_hours}</Table.Cell>
      <Table.Cell>{request.payment}</Table.Cell>
      <Table.Cell> Brief Message</Table.Cell>
      <Table.Cell>{request.phone_number}</Table.Cell>
      <Table.Cell> {request.accept}</Table.Cell>
      <Table.Cell>{showAcceptReject()}</Table.Cell>
    </Table.Row>
  );
}
