import React, { Component } from "react";
import RomCinema from "./RomCinema";

class CinemaItem extends Component {

  showRomCinemas = (romCinemas)=>{
    let result = null;
    result = romCinemas.map((romCinema, index)=>{
      return <RomCinema key={index} romCinema={romCinema}/>
    })
    return result
  }

  render() {
    let { cinema } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <div
            type="button"
            className="collapsed card-link"
            data-toggle="collapse"
            href={`#${cinema.maCumRap}`}
          >
            <div className="name_cinema">
              <i className="fas fa-film mr-2"/>
              {cinema.tenCumRap}
            </div>
            <div className="adress_cinema">{cinema.diaChi}</div>
          </div>
        </div>
        <div id={cinema.maCumRap} className="collapse" data-parent="#accordion">
          {this.showRomCinemas(cinema.danhSachRap)}
        </div>
      </div>
    );
  }
}
export default CinemaItem;
