import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../Store/Actions/ItineraryActions";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Activities from "../components/Activities";
import Header from "../components/Header";

class Itinerary extends Component {
  state = {
    itineraries: []
  };

  componentDidMount() {
    //this.fetchCities(); // Cuando la web está "montada", es cuando generamos la función fetchcities, con la información de cities (lista), por lo tanto el state varia y se render la función render de nuevo pero con la información modificada
    this.props.fetchItineraries(this.props.match.params.city);
  }

  render() {
    const { itineraries } = this.props.itineraries;
    const cityID = this.props.match.params.city;
    return (
      <div className="itinerariesContent">
        <Header></Header>

        <h1>Welcome to {this.props.match.params.city}</h1>
        {itineraries.map((itinerary, index) => {
          return (
            <div key={index}>
              <Accordion defaultActiveKey="0">
                <Card className="card">
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey={itinerary.id}
                    className="seeItineraries"
                  >
                    {itinerary.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={itinerary.id}>
                    <Card.Body className="card">
                      {itinerary.activities ? (
                        <Activities
                          className="accordion"
                          activities={itinerary.activities}
                          itinerary={itinerary}
                          cityID={cityID}
                        ></Activities>
                      ) : (
                        <p className="noactivities">sorry no activities</p>
                      )}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <img
                src={itinerary.img}
                alt="pic"
                style={{
                  width: 350,
                  height: 200,
                  objectFit: "cover",
                  overflow: "hidden",
                  display: "block",
                  borderRadius: 50,
                  marginTop: 20,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10
                }}
              />
              <p className="itinerariesInformation">
                Duration (hours):{itinerary.duration}
              </p>
              <p className="itinerariesInformation">
                Price (€):{itinerary.price}
              </p>

              <p className="itinerariesInformation">{itinerary.dates}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    itineraries: state.itineraries
  };
};
const mapDispatchToProps = dispatch => ({
  fetchItineraries: city => dispatch(fetchItineraries(city))
});
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
