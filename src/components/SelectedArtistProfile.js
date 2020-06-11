import React from "react";
import { Link } from "react-router-dom";

import API from "../API";
import SelectedArtistCalendar from "./SelectedArtistCalendar";

export default class SelectedArtistProfile extends React.Component {
  state = {
    artist: {
      availabilities: [],
    },
    dateToBook: {},
  };

  componentDidMount = () => {
    API.findClickedArtist(this.props.match.params.artistname).then((artist) =>
      this.setState({ artist })
    );
  };

  handledateToBookChange = (date) => {
    let selectedDate = this.convertDate(date);
    const allAvailabilities = [...this.state.artist.availabilities];
    let foundAvailability = allAvailabilities.find(
      (availableDateObject) => availableDateObject.date === selectedDate
    );
    this.setState({
      dateToBook: foundAvailability,
    });
  };

  convertDate = (selectedDate) => {
    return new Date(selectedDate).toISOString("yyyy-MM-dd").slice(0, 10);
  };

  render() {
    return (
      <div>
        <h3>This is {this.state.artist.name}'s profile Page </h3>
        <div>
          <SelectedArtistCalendar
            artist={this.state.artist}
            handledateToBookChange={this.handledateToBookChange}
          />
        </div>
        <button>
          <Link to={`/booking_form/${this.state.dateToBook.id}`}>Book Me!</Link>
        </button>
      </div>
    );
  }
}
