import React from "react";
import API from "../API";
import SelectedArtistCalendar from "./SelectedArtistCalendar";

export default class SelectedArtistProfile extends React.Component {
  state = {
    artist: {
      availabilities: [],
    },
  };

  componentDidMount = () => {
    API.findClickedArtist(this.props.match.params.artistname).then((artist) =>
      this.setState({ artist })
    );
  };

  render() {
    return (
      <div>
        <h3>This is {this.state.artist.name}'s profile Page </h3>
        <div>
          <SelectedArtistCalendar artist={this.state.artist} />
        </div>
      </div>
    );
  }
}
