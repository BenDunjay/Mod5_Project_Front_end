import React from "react";
import "./App.css";
import ArtistAppContainer from "./containers/ArtistAppContainer";
import AuthContainer from "./containers/AuthContainer";

export default class App extends React.Component {
  state = {
    artist: null,
  };

  loginArtist = (artist) => {
    this.setState({
      artist,
    });
  };

  logoutArtist = () => {
    this.setState({
      artist: null,
    });
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div>
        {this.state.artist ? (
          <ArtistAppContainer
            logoutArtist={this.logoutArtist}
            artist={this.state.artist}
          />
        ) : (
          <AuthContainer loginArtist={this.loginArtist} />
        )}
      </div>
    );
  }
}
