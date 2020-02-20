import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchItineraries } from "../Store/Actions/ItineraryActions";

class Itinerary extends Component {
  state = {
    itineraries: []
  };

  fetchItineraries() {
    // fetching data
    fetch("http://localhost:5000/cities/city_id/itineraries")
      .then(response => response.json())
      .then(data => {
        this.setState({ itineraries: data }); // set state con la información de cities
      })

      .catch(console.log);
  }

  componentDidMount() {
    //this.fetchCities(); // Cuando la web está "montada", es cuando generamos la función fetchcities, con la información de cities (lista), por lo tanto el state varia y se render la función render de nuevo pero con la información modificada
    fetchItineraries();
    //console.log(this.props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Welcome to {this.props.match.params.city}</h1>

        <Row>{this.props.itineraries}</Row>
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
  fetchItineraries: () => dispatch(fetchItineraries())
});
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
