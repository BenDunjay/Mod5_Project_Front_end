import React from "react";
import API from "../API";

export default class EditArtistProfile extends React.Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    API.updateArtist(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder={this.props.artist.name}
          />
          <input type="submit" value="Edit Profile" />
        </form>
      </div>
    );
  }
}
