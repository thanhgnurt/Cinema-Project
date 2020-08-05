import React, { Component } from "react";

export default class RomCinema extends Component {
  render() {
    let {romCinema}=this.props
    return (
      <ul className="list-group list-group-flush">
        <li type="button" className="list-group-item d-flex justify-content-between align-items-center list-group-item-action rom_cinema">
        <i className='fas fa-door-open mr-2 ml-4'> {romCinema.tenRap}</i>
         
          <span className="badge badge-primary badge-pill">14</span>
        </li>
     
   
      </ul>
    );
  }
}
