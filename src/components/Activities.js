import React, { Component } from "react";

export default class Activities extends Component {
  render() {
    console.log(this.props);
    const { activities } = this.props;

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
            <p className="pactivities">{activity.name}</p>

            <p className="pactivities">More info: {activity.moreinfo}</p>
          </div>
        ))}
      </div>
    );
  }
}
