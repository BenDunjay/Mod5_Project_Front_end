import React from "react";
import { Link } from "react-router-dom";

import API from "../API";
import SelectedArtistCalendar from "./SelectedArtistCalendar";
import { Card, Image } from "semantic-ui-react";

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
      <div style={container}>
        <Card>
          <Image src={this.state.artist.profile_picture} wrapped ui={false} />
          <Card.Content>
            {/* <h3>{this.state.artist.name}'s profile Page </h3> */}
            <Card.Header>{this.state.artist.username}</Card.Header>
            <Card.Meta>
              <span>{this.state.artist.name}</span>
            </Card.Meta>
            <p> {this.state.artist.email_address}</p>
            <Card.Meta> {this.state.artist.artist_genre}</Card.Meta>
            <Card.Description> {this.state.artist.bio}</Card.Description>
            <p> {this.state.artist.phone_number}</p>
            <div>
              <SelectedArtistCalendar
                artist={this.state.artist}
                handledateToBookChange={this.handledateToBookChange}
              />
            </div>
            <button>
              <Link to={`/booking_form/${this.state.dateToBook.id}`}>
                Book Me!
              </Link>
            </button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const container = { width: "fit-content" };
