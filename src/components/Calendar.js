import React from "react";
import DatePicker from "react-datepicker";

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

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        excludeDates={[new Date(), new Date("2020-6-20")]}
      />
    );
  }
}
export default Calendar;
