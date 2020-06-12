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
      <Table.Cell> Tick or Cross</Table.Cell>
      <Table.Cell> Brief Message</Table.Cell>
    </Table.Row>
  );
}
