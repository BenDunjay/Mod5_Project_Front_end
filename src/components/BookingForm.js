import React from "react";
import API from "../API";

import { Redirect } from "react-router-dom";
import { Form, Button, Message } from "semantic-ui-react";

export default class BookingForm extends React.Component {
  // all necessary states to create a booking request
  state = {
    availabilityObject: null,
    numberOfHours: 0,
    payment: 0,
    startTime: null,
    redirect: false,
    success: false,
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

  // on mounting will take the date selected and store it in the state
  componentDidMount = () => {
    API.createRequest(this.props.match.params.availability_id).then(
      (availObject) =>
        this.setState({
          availabilityObject: availObject,
        })
    );
  };

  // changes all input fields on form
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handles the submit request. Will change the number of hours and payment to floats prior to sending
  handleSubmitRequest = (e) => {
    e.preventDefault();
    let request = {
      availability_id: this.state.availabilityObject.id,
      number_of_hours: parseFloat(this.state.numberOfHours),
      payment: parseFloat(this.state.payment),
      start_time: this.state.startTime,
    };
    // if the request is successful will flip the success state to true and display a message
    API.sendARequest(request).then(() =>
      this.setState({
        success: true,
      })
    );
  };

  render() {
    if (!this.state.availabilityObject) return <div> Loading...</div>;
    let artist = this.state.availabilityObject.artist;

    return (
      <div style={bookingForm}>
        Booking Page
        <Form onSubmit={this.handleSubmitRequest} success={this.state.success}>
          <Form.Field>
            <label style={textColor}> Artist:</label>
            <input value={artist.username} disabled={true} />
            <br />
            <label style={textColor}> Date:</label>
            <input value={this.state.availabilityObject.date} disabled={true} />
            <br />
          </Form.Field>
          <Form.Field>
            <label style={textColor}>Start Time:</label>
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
            <label style={textColor}>Number of Hours Required:</label>
            <input
              type="integer"
              name="numberOfHours"
              onChange={this.handleChange}
              value={this.state.numberOfHours}
            />
          </Form.Field>
          <Form.Field>
            <br />
            <label style={textColor}>Payment</label>
            <input
              type="float"
              name="payment"
              onChange={this.handleChange}
              value={this.state.payment}
            />
            <label style={textColor}>CAD</label>
            <br />
          </Form.Field>
          <Message
            success
            header="Booking Complete"
            content="Wait to see if the artist accepts the request!"
          />
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

const textColor = {
  color: "white",
};
