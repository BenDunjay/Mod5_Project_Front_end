import React from "react";
import API from "../API";

export default class EditArtistProfile extends React.Component {
  state = {
    name: "",
    stageName: "",
    bio: "",
    profile: "",
    spotify: "",
    instagram: "",
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
          <label>Stage Name:</label>
          <input
            type="text"
            name="stageName"
            onChange={this.handleChange}
            value={this.state.stageName}
          />
          <br />
          <label>Bio:</label>
          <textarea
            type="text"
            name="bio"
            onChange={this.handleChange}
            value={this.state.bio}
          />
          <br />
          <label>Profile Pic:</label>
          <input
            type="text"
            name="profile"
            onChange={this.handleChange}
            value={this.state.profile}
          />
          <br />
          <label>Spotify Url:</label>
          <input
            type="text"
            name="spotify"
            onChange={this.handleChange}
            value={this.state.spotify}
          />
          <br />
          <label>Instagram Url:</label>
          <input
            type="text"
            name="instagram"
            onChange={this.handleChange}
            value={this.state.instagram}
          />
          <br />
          <input type="submit" value="Edit Profile" />
        </form>
      </div>
    );
  }
}
