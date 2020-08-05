import React, { Component } from "react";
import "./styleListMovieCinema.css";
import { connect } from "react-redux";
import MovieCinemaItem from "./MovieCinemaItem";

class ListMovieCinema extends Component {
  showListMovieCinema = () => {
    let { listMovieCinema, listCinemaBySupplier } = this.props;
    let result = [];
    let resultEnd = null;

    if (listCinemaBySupplier.length > 0) {
      let maCumRap = listCinemaBySupplier[0].maCumRap;
      if (listMovieCinema.length > 0) {
        let listMovie = listMovieCinema[0].lstCumRap;
        result = listMovie.filter((movieCinema) => {
          return movieCinema.maCumRap === maCumRap;
        });
      }
    }
    if (result.length > 0) {
      let listMovie = result[0].danhSachPhim;

      resultEnd = listMovie.map((movie, index) => {
        return <MovieCinemaItem key={index} movie={movie} />;
      });
    }
    return resultEnd;
  };
  render() {
    return (
      <div className="tabcontent">
        <ul className="list-group list-group-flush">
          {this.showListMovieCinema()}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listMovieCinema: state.listMovieCinema,
    listCinemaBySupplier: state.listCinemaBySupplier,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMovieCinema);
