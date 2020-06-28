import React from "react";
// import "./App.css";
import ArtistAppContainer from "./containers/ArtistAppContainer";
import VenueAppContainer from "./containers/VenueAppContainer";
import AuthContainer from "./containers/AuthContainer";
import Background from "./FrontPhoto.jpg";

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
      <div style={content}>
        <div style={styling}>{this.chooseContainer()}</div>{" "}
      </div>
    );
  }
}

const styling = {
  height: "100%",
  textAlign: "center",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const content = {
  backgroundColor: "red",
  height: "100vh",
};
