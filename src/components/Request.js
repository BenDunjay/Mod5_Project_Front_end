import React from "react";
import { Table } from "semantic-ui-react";

export default function Request({ request }) {
  return (
    <Table.Row>
      <Table.Cell>{request.id}</Table.Cell>
      <Table.Cell>{request.date}</Table.Cell>
      <Table.Cell>{request.name}</Table.Cell>
      <Table.Cell>{request.number_of_hours}</Table.Cell>
      <Table.Cell>{request.payment}</Table.Cell>
      <Table.Cell> Brief Message</Table.Cell>
      <Table.Cell> {request.accept}</Table.Cell>
      {request.accept === true || false ? null : (
        <p>
          <button> Accept </button> <button>Reject</button>{" "}
        </p>
      )}
    </Table.Row>
  );
}
