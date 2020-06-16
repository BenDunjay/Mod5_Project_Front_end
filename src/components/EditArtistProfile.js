import React from "react";
import API from "../API";

import { Button, Form } from "semantic-ui-react";

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
      <Form onSubmit={this.handleSubmit} style={editProfile}>
        <Form.Field>
          <label>Artist Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder={this.props.artist.name}
          />
        </Form.Field>
        <Form.Field>
          <label>User Name:</label>
          <input
            type="text"
            name="stageName"
            onChange={this.handleChange}
            value={this.state.username}
          />
        </Form.Field>
        <br />
        <Form.Field>
          <label>Bio:</label>
          <textarea
            type="text"
            name="bio"
            onChange={this.handleChange}
            value={this.state.bio}
          />
        </Form.Field>
        <br />
        <Form.Field>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </Form.Field>
        <br />
        <Form.Field>
          <label>Artist Genre:</label>
          <input
            type="text"
            name="artistGenre"
            onChange={this.handleChange}
            value={this.state.artist_genre}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={this.handleChange}
            value={this.state.phone_number}
          />
        </Form.Field>
        <br />
        <br />
        <Form.Field>
          <label>Profile Pic:</label>
          <input
            type="text"
            name="profile"
            onChange={this.handleChange}
            value={this.state.profile}
          />
        </Form.Field>
        <br />
        <Form.Field>
          <label>Spotify Url:</label>
          <input
            type="text"
            name="spotify"
            onChange={this.handleChange}
            value={this.state.spotify}
          />
        </Form.Field>
        <br />
        <Form.Field>
          <label>Instagram Url:</label>
          <input
            type="text"
            name="instagram"
            onChange={this.handleChange}
            value={this.state.instagram}
          />
        </Form.Field>
        <br />
        <Button positive type="submit" value="Edit Profile">
          Edit Profile
        </Button>
      </Form>
    );
  }
}

const editProfile = {
  margin: "10px 250px",
  padding: "5px",
  textAlign: "center",
};
