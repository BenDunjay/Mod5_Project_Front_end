import React from "react";
import API from "./API";
import ArtistAppContainer from "./containers/ArtistAppContainer";
import VenueAppContainer from "./containers/VenueAppContainer";
import AuthContainer from "./containers/AuthContainer";

export default class App extends React.Component {
  state = {
    artist: null,
    venue: null,
  };

  // on mounting(refresh) everytime it will check to see if there is either an artist or venue with a JWT token

  componentDidMount = () => {
    API.authorize().then((data) => {
      if (data.artist) {
        this.loginArtist(data.artist);
      } else if (data.venue) {
        this.loginVenue(data.venue);
      }
    });
  };

  // changes artist state object to the artist logging in

  loginArtist = (artist) => {
    this.setState({
      artist,
    });
  };

  // changes venue state object to the venue logging in

  loginVenue = (venue) => {
    this.setState({
      venue,
    });
  };

  //removes the token and resets the state.

  logout = () => {
    this.setState({
      artist: null,
      venue: null,
    });
    localStorage.removeItem("token");
  };

  // looks at whether an artist or venue is logged in and will then proceed to the necessary container with their data

  chooseContainer = () => {
    if (this.state.artist) {
      return (
        <ArtistAppContainer logout={this.logout} artist={this.state.artist} />
      );
    } else if (this.state.venue) {
      return (
        <VenueAppContainer venue={this.state.venue} logout={this.logout} />
      );
    } else {
      return (
        <AuthContainer
          loginArtist={this.loginArtist}
          loginVenue={this.loginVenue}
        />
      );
    }
  };

  render() {
    return (
      <div>
        <div>{this.chooseContainer()}</div>{" "}
      </div>
    );
  }
}
