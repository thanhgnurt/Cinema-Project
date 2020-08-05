import React, { Component } from "react";
import "./SelectMovieStyle.css";

export default class SelectMovie extends Component {
  render() {
    return (
      <div>
        <div className="bg_schedule ">
          <div className="bg_schedule_layout2 ">
            <NavSelect />
            
          </div>
        </div>
      </div>
    );
  }
}
