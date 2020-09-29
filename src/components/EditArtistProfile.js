import React from "react";
import API from "../API";

import "../css/EditArtistProfile.css";

import { Button, Form } from "semantic-ui-react";

export default class EditArtistProfile extends React.Component {
  state = {
    name: this.props.artist.name,
    username: this.props.artist.username,
    bio: this.props.artist.bio,
    profile_picture: this.props.artist.profile_picture,
    spotify: this.props.artist.spotify,
    instagram: this.props.artist.instagram,
    email_address: this.props.artist.email_address,
    artist_genre: this.props.artist.artist_genre,
    phone_number: this.props.artist.phone_number,
  };

  // handles changes in artist profile fields
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    API.updateArtist(this.state);
  };

  render() {
    return (
      <div className="edit-artist-div">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label className="edit-artist-form-label-top">Artist Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder={this.props.artist.name}
              className="edit-artist-form-input"
            />
          </Form.Field>
          <Form.Field>
            <label className="edit-artist-form-label">User Name:</label>
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
              placeholder={this.props.artist.username}
              className="edit-artist-form-input"
            />
          </Form.Field>
          <br />
          <Form.Field>
            <label className="edit-artist-form-label">Bio:</label>
            <textarea
              type="text"
              name="bio"
              onChange={this.handleChange}
              value={this.state.bio}
              className="edit-artist-form-input"
            />
          </Form.Field>
          <br />
          <Form.Field>
            <label className="edit-artist-form-label">Email:</label>
            <input
              type="text"
              name="email_address"
              onChange={this.handleChange}
              value={this.state.email_address}
              className="edit-artist-form-input"
            />
          </Form.Field>
          <br />
          <Form.Field>
            <label className="edit-artist-form-label">Artist Genre:</label>
            <input
              type="text"
              name="artist_genre"
              onChange={this.handleChange}
              value={this.state.artist_genre}
              className="edit-artist-form-input"
            />
          </Form.Field>
          <Form.Field>
            <label className="edit-artist-form-label">Phone Number:</label>
            <input
              type="text"
              name="phone_number"
              onChange={this.handleChange}
              value={this.state.phone_number}
              className="edit-artist-form-input"
            />
          </Form.Field>
          <br />
          <br />
          <Form.Field>
            <label className="edit-artist-form-label">Profile Pic:</label>
            <input
              type="text"
              name="profile_picture"
              onChange={this.handleChange}
              value={this.state.profile_picture}
              className="edit-artist-form-input"
            />
          </Form.Field>
          <br />
          <Form.Field>
            <label className="edit-artist-form-label">Spotify Url:</label>
            <input
              type="text"
              name="spotify"
              onChange={this.handleChange}
              value={this.state.spotify}
              className="edit-artist-form-input"
            />
          </Form.Field>
          <br />
          <Form.Field>
            <label className="edit-artist-form-label">Instagram Url:</label>
            <input
              type="text"
              name="instagram"
              onChange={this.handleChange}
              value={this.state.instagram}
              className="edit-artist-form-input"
            />
          </Form.Field>
          <br />
          <Button positive type="submit" value="Edit Profile">
            Edit Profile
          </Button>
        </Form>
      </div>
    );
  }
}
