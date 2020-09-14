import React, { Component } from "react";

import API from "../API";
import ArtistList from "../components/ArtistList";
import ArtistShown from "../components/ArtistShown";
import NoArtistShown from "../components/NoArtistShown";
import { Table } from "semantic-ui-react";

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

  handleFilterDateChange = (event) => {
    this.setState({
      dateFilter: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <h5>Date Filter</h5>
          <input
            onChange={this.handleFilterDateChange}
            type="text"
            name="name"
            placeholder="Filter: YYYY-MM-DD"
          />
          <Table>
            <ArtistList
              allArtists={this.artistFilter()}
              handleSelectedArtistChange={this.handleSelectedArtistChange}
            />
          </Table>
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
