import React, { Component } from "react";
import { connect } from "react-redux";
import CarouselMovies from "../CarouselMovies/CarouselMovies";
import * as actions from "./../../../../Redux/Actions/index";

class ListMovie extends Component {
  componentDidMount() {
    this.props.onFetchListMovie();
  }

  divideCarouselMovie = (listMovie, items) => {
    let partCarousel = listMovie.length / items;
    if (partCarousel !== 0) {
      let carouselMovies = [];
      for (let i = 0; i < partCarousel; i++) {
        let carouselItem = [];
        for (
          let j = i * items;
          j < i * items + items && j < partCarousel * items;
          j++
        ) {
          carouselItem.push(listMovie[j]);
        }
        carouselMovies.push(carouselItem);
      }
      return (
        <CarouselMovies
          carouselMovies={carouselMovies}
          partCarousel={partCarousel}
        />
      );
    }
  };

  render() {
    
    let { listMovie } = this.props;
    let { quantiView } = this.props.galleryView;
    return (
        <div>
      {this.divideCarouselMovie(listMovie, quantiView)}
      </div>
    );
  
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.listMovie,
    keySearch: state.searchMovie,
    galleryView: state.galleryView,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchListMovie: () => {
      dispatch(actions.fetchListMovieRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
