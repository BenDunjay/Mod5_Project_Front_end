import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import API from "../API";
import SelectedArtistCalendar from "./SelectedArtistCalendar";
import { Card, Image, Container } from "semantic-ui-react";

import "../css/SelectedArtistProfile.css";

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
    console.log(selectedDate);
    this.setState({
      dateToBook: foundAvailability,
    });
  };

  convertDate = (selectedDate) => {
    return moment(selectedDate).format("YYYY-MM-DD");
  };

  render() {
    return (
      <div className="selected-artist-profile-surrounding-div">
        <Container className="selected-artist-profile-div">
          <Card className="selected-artist-profile-card">
            <Image src={this.state.artist.profile_picture} wrapped ui={false} />
            <Card.Content className="selected-artist-card-content">
              <Card.Header className="selected-artist-card-content">
                {this.state.artist.username}
              </Card.Header>
              <Card.Meta className="selected-artist-card-content">
                <span>{this.state.artist.name}</span>
              </Card.Meta>
              <p> {this.state.artist.email_address}</p>
              <Card.Meta className="selected-artist-card-content">
                {" "}
                {this.state.artist.artist_genre}
              </Card.Meta>
              <Card.Description className="selected-artist-card-content">
                {" "}
                {this.state.artist.bio}
              </Card.Description>
              <p> {this.state.artist.phone_number}</p>
              <div>
                <SelectedArtistCalendar
                  artist={this.state.artist}
                  handledateToBookChange={this.handledateToBookChange}
                />
              </div>
              <button className="selected-artist-book-button">
                <Link to={`/booking_form/${this.state.dateToBook.id}`}>
                  Book Me!
                </Link>
              </button>
            </Card.Content>
          </Card>
        </Container>
      </div>
    );
  }
}
