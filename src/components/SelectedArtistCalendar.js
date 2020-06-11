import React, { Component } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class SelectedArtistCalendar extends Component {
  state = {
    startDate: new Date(),
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
        <h3>See the dates {this.props.artist.name} is currently available</h3>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          includeDates={this.showArtistAvailability()}
        />
      </div>
    );
  }
}
