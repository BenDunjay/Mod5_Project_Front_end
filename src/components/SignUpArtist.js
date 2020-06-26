import React, { Component } from "react";
import API from "../API";

import { Button, Form } from "semantic-ui-react";

class SignUpArtist extends Component {
  state = {
    username: "",
    password: "",
    stageName: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.artistPostFetch(this.state);
  };

  artistPostFetch = (artist) => {
    API.signupArtist(artist).then((data) => {
      if (data.message) {
        alert("artist already set");
      } else {
        localStorage.setItem("token", data.token);
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label style={color}>Username:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </Form.Field>
        <br />
        <Form.Field>
          <label style={color}>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </Form.Field>
        <Button type="submit" value="signup">
          {" "}
          Sign Up{" "}
        </Button>
      </Form>
    );
  }
}

const color = {
  color: "lightgrey",
};

export default SignUpArtist;
