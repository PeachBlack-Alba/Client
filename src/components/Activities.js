import React, { Component } from "react";
import { browserHistory } from "react-router";
import Buttontest from "../components/Buttontest";

export default class Activities extends Component {
  render() {
    console.log(this.props);
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
            {/* put favourites in activities */}
            <div className="informacionActividades">
              <p className="pactivities">{activity.name}</p>

              <button
                onClick={() => {
                  let win = window.open("");
                  win.location.replace(activity.moreinfo);
                }}
              >
                More info
              </button>
              {/* <a onClick={() => (window.location.href = activity.moreinfo)}>
                  More info:
                </a> */}

              {/* <Buttontest></Buttontest> */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
