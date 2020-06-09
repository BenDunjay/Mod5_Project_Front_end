import React, { Component } from "react";

import API from "../API";
import ArtistList from "../components/ArtistList";
import ArtistShown from "../components/ArtistShown";
import NoArtistShown from "../components/NoArtistShown";

export default class ArtistSearchPage extends Component {
  state = {
    selectedArtist: null,
    allArtists: [],
    dateFilter: "",
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

  artistFilter = () => {
    if (this.state.dateFilter === "") {
      return this.state.allArtists;
    } else {
      return this.checkArtistAvailability();
    }
  };

  checkArtistAvailability = () => {
    let newArtists = [...this.state.allArtists];
    let newArtistsCopy = newArtists.filter((artist) => {
      if (
        artist.availabilities.find(
          (dateObject) => dateObject.date === this.state.dateFilter
        )
      ) {
        return artist;
      }
    });
    return newArtistsCopy;
  };

  render() {
    return (
      <div>
        <div>
          <input type="text" name="name" placeholder="Check by availability" />

          <ArtistList
            allArtists={this.artistFilter()}
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
