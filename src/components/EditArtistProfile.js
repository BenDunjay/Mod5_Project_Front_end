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
    email: "",
    artistGenre: "",
    phoneNumber: "",
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
          <label>Artist Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder={this.props.artist.name}
          />
          <label>User Name:</label>
          <input
            type="text"
            name="stageName"
            onChange={this.handleChange}
            value={this.state.username}
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
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <label>Artist Genre:</label>
          <input
            type="text"
            name="artistGenre"
            onChange={this.handleChange}
            value={this.state.artist_genre}
          />
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={this.handleChange}
            value={this.state.phone_number}
          />
          <br />
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
