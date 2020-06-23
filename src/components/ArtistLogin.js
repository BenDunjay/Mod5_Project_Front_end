import React, { Component } from "react";
import API from "../API";

import { Redirect } from "react-router-dom";

import { Button, Form } from "semantic-ui-react";

class ArtistLogin extends Component {
  state = {
    name: "",
    password: "",
    // redirect: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.artistLoginFetch(this.state);
    // this.setState({
    //   redirect: false,
    // });
  };

  render() {
    // if (this.state.redirect) {
    //   return <Redirect to="/profile" />;
    // }
    return (
      <div>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
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
      </div>
    );
  }
}

export default ArtistLogin;
