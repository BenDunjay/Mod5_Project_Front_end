import React from "react";
import DatePicker from "react-datepicker";
import API from "../API";

import "react-datepicker/dist/react-datepicker.css";

class Calendar extends React.Component {
  state = {
    startDate: new Date(),
    availableDates: [],
    selectedDate: "",
  };

  componentDidMount = () => {
    this.setState({
      availableDates: this.props.artistDates,
    });
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  // need to write method to check if the input follows the YYYY-MM-DD else returns sorry this is not a date.

  authenticateAvailabilityInput = (event) => {
    event.preventDefault();
    this.convertDate();
  };

  convertDate = () => {
    let date = new Date(this.state.selectedDate)
      .toISOString("yyyy-MM-dd")
      .slice(0, 10);
    if (this.props.artistDates.includes(date)) {
      alert("This date is already available!");
    } else {
      this.sendAvailabilityRequest(date);
    }
  };

  sendAvailabilityRequest = (date) => {
    let newDate = { date: date };
    API.createAvailability(newDate).then((newAvailability) =>
      this.setState({
        availableDates: [...this.state.availableDates, newAvailability],
        selectedDate: "",
      })
    );
  };

  removeAvailabilityRequest = (e) => {
    e.preventDefault();
    let newDate = new Date(this.state.selectedDate)
      .toISOString("yyyy-MM-dd")
      .slice(0, 10);

    let selectedDate = this.state.availableDates.filter(
      (dateObject) => dateObject.date === newDate
    );
    console.log(selectedDate);
    API.deleteAvailability(selectedDate[0].id).then(() =>
      this.removeDate(selectedDate[0])
    );
  };

  removeDate = (date) => {
    let newDates = this.state.availableDates.filter(
      (dateObject) => dateObject.id !== date.id
    );
    console.log(date, newDates);
    this.setState({ availableDates: newDates });
  };

  handleDateChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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
