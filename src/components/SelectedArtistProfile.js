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
    console.log(this.state.artist);
    return (
      <div>
        <h3>This is {this.state.artist.name}'s profile Page </h3>
        <h2>{this.state.artist.name}</h2>
        <h3>{this.state.artist.username}</h3>
        <p> {this.state.artist.email_address}</p>
        <p> {this.state.artist.artist_genre}</p>
        <p> {this.state.artist.bio}</p>
        <p> {this.state.artist.phone_number}</p>
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
