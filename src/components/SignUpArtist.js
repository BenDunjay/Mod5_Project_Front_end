import React, { Component } from "react";
import API from "../API";

class SignUpArtist extends Component {
  state = {
    name: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.userPostFetch(this.state);
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
      <div>
        <h1>Sign Up</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <br />
            <input type="submit" value="Sign up" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpArtist;
