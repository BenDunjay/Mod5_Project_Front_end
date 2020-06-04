import React, { Component } from "react";

class Login extends Component {
  state = {
    name: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  artistLoginFetch = (artist) => {
    return fetch("http://localhost:3000/api/v1/artist_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ artist }),
    })
      .then((resp) => resp.json())
      .then((data) => {
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
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
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
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
