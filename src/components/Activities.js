import React, { Component } from "react";
import { browserHistory } from "react-router";
import Likebutton from "../components/Likebutton";

export default class Activities extends Component {
  render() {
    const { activities } = this.props;
    console.log("activities", activities);

    return (
      <div>
        {activities.map((activity, index) => (
          <div key={index}>
            <img
              src={activity.img}
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

            <div className="informacionActividades">
              <p className="pactivities">{activity.name}</p>
              <button
                className="linkPaginaWeb"
                onClick={() => {
                  let win = window.open("");
                  win.location.replace("//" + activity.moreinfo);
                }}
              >
                More info
              </button>
              <Likebutton
                itinerary={this.props.itinerary}
                activity={activity}
                cityID={this.props.cityID}
              ></Likebutton>{" "}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
