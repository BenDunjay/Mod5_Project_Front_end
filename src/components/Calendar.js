import React from "react";
import DatePicker from "react-datepicker";
import API from "../API";

import "react-datepicker/dist/react-datepicker.css";

class Calendar extends React.Component {
  state = {
    startDate: new Date(),
    availableDates: [],
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

  createAvailability = (event) => {
    let date = new Date(this.state.startDate)
      .toISOString("yyyy-MM-dd")
      .slice(0, 10);
    if (this.props.artistDates.includes(date)) {
      alert("This date is already available!");
    } else {
      this.sendAvailabilityRequest(date);
    }
  };

  sendAvailabilityRequest = (date) => {
    let newDate = { date: date, artist_id: this.props.artist.id };
    API.createAvailability(newDate).then(
      this.setState({
        availableDates: [...this.state.availableDates, newDate],
      })
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.createAvailability}>Pick a date</button>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          excludeDates={this.state.availableDates.map((date) => new Date(date))}
        />
      </div>
    );
  }
}
export default Calendar;
