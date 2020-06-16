import React from "react";
import API from "../API";

import { Redirect } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";

export default class BookingForm extends React.Component {
  state = {
    availabilityObject: null,
    numberOfHours: 0,
    payment: 0,
    startTime: null,
    redirect: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/all_artists" />;
    }
  };

  componentDidMount = () => {
    API.createRequest(this.props.match.params.availability_id).then(
      (availObject) =>
        this.setState({
          availabilityObject: availObject,
        })
    );
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitRequest = (e) => {
    e.preventDefault();
    let request = {
      availability_id: this.state.availabilityObject.id,
      number_of_hours: parseFloat(this.state.numberOfHours),
      payment: parseFloat(this.state.payment),
      start_time: this.state.startTime,
    };
    API.sendARequest(request).then((req) => console.log(req));
  };

  render() {
    if (!this.state.availabilityObject) return <div> Loading...</div>;
    let artist = this.state.availabilityObject.artist;

    return (
      <div style={bookingForm}>
        Booking Page
        <Form onSubmit={this.handleSubmitRequest}>
          <Form.Field>
            <label> Artist:</label>
            <input value={artist.name} disabled={true} />
            <br />
            <label> Date:</label>
            <input value={this.state.availabilityObject.date} disabled={true} />
            <br />
          </Form.Field>
          <Form.Field>
            <label>Start Time:</label>
            <input
              type="time"
              name="startTime"
              min="09:00"
              max="03:00"
              required
              onChange={this.handleChange}
              value={this.state.startTime}
            />
          </Form.Field>
          <Form.Field>
            <label>Number of Hours Required:</label>
            <input
              type="integer"
              name="numberOfHours"
              onChange={this.handleChange}
              value={this.state.numberOfHours}
            />
          </Form.Field>
          <Form.Field>
            <br />
            <label>Payment</label>
            <input
              type="float"
              name="payment"
              onChange={this.handleChange}
              value={this.state.payment}
            />
            <label>CAD</label>
            <br />
          </Form.Field>
          <Button type="submit" value="Submit Booking Request">
            Submit Booking{" "}
          </Button>
        </Form>
        <br></br>
        {this.renderRedirect()}
        <Button onClick={this.setRedirect} color="yellow">
          {" "}
          Back to Artist List
        </Button>
      </div>
    );
  }
}

const bookingForm = {
  margin: "10px 250px",
  padding: "5px",
  textAlign: "center",
};
