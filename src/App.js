import React from "react";
import "./App.css";
import AppContainer from "./containers/AppContainer";
import AuthContainer from "./containers/AuthContainer";

export default class App extends React.Component {
  state = {
    artist: null,
  };

  loginArtist = (artist) => {
    // console.log(artist);
    this.setState({
      artist,
    });
  };

  render() {
    return (
      <div>
        {this.state.artist ? (
          <AppContainer />
        ) : (
          <AuthContainer loginArtist={this.loginArtist} />
        )}
      </div>
    );
  }
}
