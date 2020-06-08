import React, { Component } from "react";

import API from "../API";
import ArtistList from "../components/ArtistList";
import ArtistShown from "../components/ArtistShown";
import NoArtistShown from "../components/NoArtistShown";

export default class ArtistSearchPage extends Component {
  state = {
    selectedArtist: null,
    allArtists: [],
  };

  componentDidMount = () => {
    API.getAllArtists().then((artistsArray) =>
      this.setState({
        allArtists: artistsArray,
      })
    );
  };

  handleSelectedArtistChange = (artist) => {
    this.setState({
      selectedArtist: artist,
    });
  };

  render() {
    return (
      <div>
        <div>
          <ArtistList
            allArtists={this.state.allArtists}
            handleSelectedArtistChange={this.handleSelectedArtistChange}
          />
        </div>
        <div>
          {this.state.selectedArtist ? (
            <ArtistShown artist={this.state.selectedArtist} />
          ) : (
            <NoArtistShown />
          )}
        </div>
      </div>
    );
  }
}
