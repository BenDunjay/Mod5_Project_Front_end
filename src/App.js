import React from "react";
import "./App.css";
import ArtistAppContainer from "./containers/ArtistAppContainer";
import VenueAppContainer from "./containers/VenueAppContainer";
import AuthContainer from "./containers/AuthContainer";

export default class App extends React.Component {
  state = {
    artist: null,
    venue: null,
  };

  loginArtist = (artist) => {
    this.setState({
      artist,
    });
  };

  loginVenue = (venue) => {
    this.setState({
      venue,
    });
  };

  logout = () => {
    this.setState({
      artist: null,
      venue: null,
    });
    localStorage.removeItem("token");
  };

  chooseContainer = () => {
    if (this.state.artist) {
      return (
        <ArtistAppContainer logout={this.logout} artist={this.state.artist} />
      );
    } else if (this.state.venue) {
      return <VenueAppContainer venue={this.state.venue} />;
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
    return <div>{this.chooseContainer()}</div>;
  }
}
