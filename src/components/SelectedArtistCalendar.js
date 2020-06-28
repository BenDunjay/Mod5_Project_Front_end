import React, { Component } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class SelectedArtistCalendar extends Component {
  state = {
    startDate: null,
  };

  handleChange = (date) => {
    this.props.handledateToBookChange(date);
    this.setState({
      startDate: date,
    });
  };

  showArtistAvailability = () => {
    return this.props.artist.availabilities.map(
      (dateObject) => new Date(dateObject.date)
    );
  };

  render() {
    return (
      <div>
        <h5>See the dates {this.props.artist.name} is currently available!</h5>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          includeDates={this.showArtistAvailability()}
          placeholderText="Click to select a date"
        />
      </div>
    );
  }
}
