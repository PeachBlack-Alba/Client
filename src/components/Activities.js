import React, { Component } from "react";

export default class Activities extends Component {
  state = {
    activities: []
  };

  render() {
    console.log(this.props);
    return <div>Activities</div>;
  }
}
