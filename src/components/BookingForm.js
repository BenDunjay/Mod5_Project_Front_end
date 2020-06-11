import React from "react";
import API from "../API";

export default class BookingForm extends React.Component {
  state = {
    availabilityObject: null,
    numberOfHours: 0,
    payment: 0,
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
    };
    API.sendARequest(request).then((req) => console.log(req));
  };

  render() {
    if (!this.state.availabilityObject) return <div> Loading...</div>;
    let artist = this.state.availabilityObject.artist;

    return (
      <div>
        Hi from {artist.name} booking page
        <form onSubmit={this.handleSubmitRequest}>
          <label> Artist:</label>
          <input value={artist.name} />
          <br />
          <label> Date:</label>
          <input value={this.state.availabilityObject.date} />
          <br />
          <label>Number of Hours Required:</label>
          <input
            type="integer"
            name="numberOfHours"
            onChange={this.handleChange}
            value={this.state.numberOfHours}
          />
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
          <input type="submit" value="Submit Booking Request" />
        </form>
      </div>
    );
  }
}
