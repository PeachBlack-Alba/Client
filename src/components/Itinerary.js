import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchItineraries } from "../Store/Actions/ItineraryActions";

class Itinerary extends Component {
  state = {
    itineraries: []
  };

  componentDidMount() {
    //this.fetchCities(); // Cuando la web está "montada", es cuando generamos la función fetchcities, con la información de cities (lista), por lo tanto el state varia y se render la función render de nuevo pero con la información modificada
    this.props.fetchItineraries(this.props.match.params.city);
    //console.log(this.props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Welcome to {this.props.match.params.city}</h1>

        {/* <Row>{this.props.itineraries}</Row> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    itineraries: state.itineraries
  };
};
const mapDispatchToProps = dispatch => ({
  fetchItineraries: city => dispatch(fetchItineraries(city))
});
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
