import React from "react";
import DatePicker from "react-datepicker";
import API from "../API";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class Calendar extends React.Component {
  state = {
    startDate: new Date(),
    availableDates: [],
    selectedDate: "",
  };

  // sets the available dates of the artist logged in
  componentDidMount = () => {
    this.setState({
      availableDates: this.props.artistDates,
    });
  };

  // captures the date being entered into the input fields
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  // converts the date to the correct format
  authenticateAvailabilityInput = (event) => {
    event.preventDefault();
    this.convertDate();
  };

  convertDate = () => {
    let date = moment(this.state.selectedDate).format("YYYY-MM-DD");
    if (this.props.artistDates.includes(date)) {
      alert("This date is already available!");
    } else {
      this.sendAvailabilityRequest(date);
    }
  };

  // creates the new availability and sets the available dates to all the new dates and resets selectedDate to empty
  sendAvailabilityRequest = (date) => {
    let newDate = { date: date };
    API.createAvailability(newDate).then((newAvailability) =>
      this.setState({
        availableDates: [...this.state.availableDates, newAvailability],
        selectedDate: "",
      })
    );
  };

  // looks for the entered date in the artists available dates via filtering. Will then remove the date if the ID's match
  removeAvailabilityRequest = (e) => {
    e.preventDefault();
    let newDate = moment(this.state.selectedDate).format("YYYY-MM-DD");

    let selectedDate = this.state.availableDates.filter(
      (dateObject) => dateObject.date === newDate
    );
    API.deleteAvailability(selectedDate[0].id).then(() =>
      this.removeDate(selectedDate[0])
    );
  };

  removeDate = (date) => {
    let newDates = this.state.availableDates.filter(
      (dateObject) => dateObject.id !== date.id
    );
    this.setState({ availableDates: newDates, selectedDate: "" });
  };

  handleDateChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // sets all dates to the correct format for the Calendar
  showArtistAvailability = () => {
    return this.state.availableDates.map((date) => new Date(date.date));
  };

  render() {
    return (
      <div style={container}>
        <form onSubmit={this.authenticateAvailabilityInput} style={form}>
          {/* <label>Create availability</label> */}
          <input
            type="text"
            name="selectedDate"
            onChange={this.handleDateChange}
            value={this.state.selectedDate}
            placeholder="YYYY-MM-DD"
          />
          <br />
          <input type="submit" value="Create availability" style={button} />
        </form>
        <form onSubmit={this.removeAvailabilityRequest} style={form}>
          {/* <label>Remove availability</label> */}
          <input
            type="text"
            name="selectedDate"
            onChange={this.handleDateChange}
            value={this.state.selectedDate}
            placeholder="YYYY-MM-DD"
          />
          <br />
          <input type="submit" value="Remove availability" style={button} />
        </form>

        <h5 style={form}>See the dates you are currently available</h5>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          includeDates={this.showArtistAvailability()}
          inline
        />
      </div>
    );
  }
}

const container = { margin: "5px", textAlign: "center" };
const button = { margin: "5px", textAlign: "center" };
const form = { textAlign: "center" };

export default Calendar;
