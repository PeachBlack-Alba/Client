import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CitiesPage extends Component {
  state = {
    cities: [], // creamos un empty array, cada vez que el state varia, se render la funcióndentro de render con la información modificada
    fileterdCities: [],
    input: ""
  };

  render() {
    console.log(this.props);
    const { citiesData } = this.props;
    return (
      <div>
        {citiesData.map(city => {
          // we are just maping one elemet (city), if we mapped more than one should be {this.state.cities.map((cities )=>
          // map to get the information we need of all cities, but one by one. That's why we put "city" in the parentesis
          return (
            <div key={city._id}>
              <h1 className="cityName">{city.name}</h1>
              <p className="cityCountry">{city.country}</p>
              <Link className="seeItineraries" to={"/itineraries/" + city.name}>
                See itineraries
              </Link>
              <img
                src={city.img}
                alt="pic"
                style={{
                  width: 350,
                  height: 200,
                  objectFit: "cover",
                  overflow: "hidden",
                  display: "block",
                  // marginLeft: "auto",
                  // marginRight: "auto",
                  paddingBottom: 10,
                  borderRadius: 50,
                  margin: 20
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
