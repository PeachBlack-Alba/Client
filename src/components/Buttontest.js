import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Buttontest extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      itineraryId: this.props.itineraryId,
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    this.setState({
      liked: !this.state.liked
    });
    console.log(this.state);
  }

  render() {
    const text = this.state.liked;
    const label = this.state.liked;
    return (
      <div className="customContainer">
        <button className="btn btn-primary" onClick={this.handleChange}>
          {/* //onClick={this.handleSubmit} */}
          {label}
        </button>
        <p>you {text} this.</p>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Buttontest)
);
