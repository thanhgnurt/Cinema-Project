import React, { Component } from "react";
import "./ScheduleStyle.css";
// import NavSelect from "../NavSelect/NavSelect";
import ListMovie from "../ListMovie/ListMovie";
import GalleryViewMovie from "../GalleryViewMovie/GalleryViewMovie";
import Hr from './../../Hr'

export default class ScheduleMovie extends Component {
  render() {
    return (
      <div className="scheduleLayer1">
        <div className="scheduleLayer2">
           <div className=" scheduleLayer3">
             <Hr/>
             {/* <hr className="hrScheduleMovie"/> */}
          <div className="container mb-3 ">
            
            <nav className="navbar navbar-expand navbar-light bg_beauty jus_center"></nav>
          </div>
          {/* Movie Schedule title */}
          {/* Movie Schedule content */}
          <GalleryViewMovie/>
          <ListMovie />

        <Hr/>
          {/* Movie Schedule content */}
        </div>
        </div>
      </div>
    );
  }
}
