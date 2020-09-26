import React, { Component } from "react";
import API from "../API";

import { Redirect } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

import "../css/ArtistLogin.css";

class ArtistLogin extends Component {
  state = {
    username: "",
    password: "",
    redirect: false,
  };

  // will set the state of the appropriate input field

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // will look at the route in the backend and check if the artist is valid. If so, will attach a token and pass data to login the artist

  artistLoginFetch = (artist) => {
    API.loginArtist(artist).then((data) => {
      if (data.message) {
        alert("Invalid login");
      } else {
        localStorage.setItem("token", data.jwt);
        this.props.loginArtist(data.artist);
      }
    });
  };

  // will handle the submit of login being clicked and send the state as the arguments.

  handleSubmit = (e) => {
    e.preventDefault();
    this.artistLoginFetch(this.state);
    this.setState({
      redirect: true,
    });
  };

  render() {
    // will redirect to the profile page
    if (this.state.redirect) {
      return <Redirect to="/profile" />;
    }
    return (
      <Form onSubmit={this.handleSubmit} className="artistlogin">
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
        </Form.Field>
        <br />
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
        </Form.Field>
        <Button type="submit" value="Login">
          {" "}
          Login{" "}
        </Button>
      </Form>
    );
  }
}

export default ArtistLogin;
