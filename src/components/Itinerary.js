import React, { Component } from "react";

export default class Itinerary extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Welcome to {this.props.match.params.city}</h1>
      </div>
    );
  }
}
