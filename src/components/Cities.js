import React, { Component } from "react";

export default class Cities extends Component {
  state = {
    cities: [] // creamos un empty array, cada vez que el state varia, se render la funcióndentro de render con la información modificada
  };
  fetchCities() {
    // fetching data
    fetch("http://localhost:5000/cities/all") // fetch data of list of cities
      .then(res => res.json())
      .then(data => {
        this.setState({ cities: data }); // set state con la información de cities
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.fetchCities(); // Cuando la web está "montada", es cuando generamos la función fetchcities, con la información de cities (lista), por lo tanto el state varia y se render la función render de nuevo pero con la información modificada
  }

  render() {
    console.log(this.state.cities);
    return (
      <div>
        {this.state.cities.map(city => {
          // we are just maping one elemet (city), if we mapped more than one should be {this.state.cities.map((cities )=>
          // map to get the information we need of all cities, but one by one. That's why we put "city" in the parentesis
          return (
            <div key={city._id}>
              <h1>{city.name}</h1>
              <p>{city.country}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
