import React, { Component } from "react";

export default class Logout extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.logout}> Logout</button>
      </div>
    );
  }
}
