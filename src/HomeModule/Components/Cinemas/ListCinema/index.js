import React, { Component } from "react";
import CinemaItem from "./CinemaItem";
import { connect } from "react-redux";
import "./styles.css";
import ListMovieCinema from "../ListMovieCinema/ListMovieCinema";

class ListCinemas extends Component {
  
  showListCinemaBySupplier = (listCinemaBySupplier) => {
    let result = null;
    result = listCinemaBySupplier.map((cinemaBySupplier, index) => {
      return <CinemaItem key={index} cinema={cinemaBySupplier} index={index} />;
    });

    return result;
  };

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { listCinemaBySupplier } = this.props;

    return (
      <div className="cinema_by_supplier mt-2">
        <div className="tab">
          <div id="accordion">
            {this.showListCinemaBySupplier(listCinemaBySupplier)}
          </div>
        </div>
        <ListMovieCinema />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listCinemaBySupplier: state.listCinemaBySupplier,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCinemas);
