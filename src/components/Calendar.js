import React from "react";
import DatePicker from "react-datepicker";
import API from "../API";

import "react-datepicker/dist/react-datepicker.css";

class Calendar extends React.Component {
  state = {
    startDate: new Date(),
    unavailableDate: [],
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
    console.log(date);
    console.log(this.props.artistDates);
    API.createAvailability(date).then(console.log);
  };

  render() {
    return (
      <div>
        <button onClick={this.createAvailability}>Pick a date</button>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          excludeDates={[
            new Date(),
            new Date("2020-6-20"),
            new Date("2020-6-21"),
          ]}
        />
      </div>
    );
  }
}
export default Calendar;
