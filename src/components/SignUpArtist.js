import React, { Component } from "react";
import API from "../API";

import { Button, Form } from "semantic-ui-react";
import "../css/SignUpArtist.css";

class SignUpArtist extends Component {
  state = {
    username: "",
    password: "",
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
      <Form onSubmit={this.handleSubmit} className="signupartist">
        <Form.Field>
          <label>Username:</label>
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
        </Form.Field>
        <Button type="submit" value="signup">
          {" "}
          Sign Up{" "}
        </Button>
      </Form>
    );
  }
}

export default SignUpArtist;
