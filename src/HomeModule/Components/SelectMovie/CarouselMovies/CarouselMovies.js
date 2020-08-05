import React, { Component } from "react";
import CarouseItem from "./CarouselItem";

export default class CarouselMovies extends Component {
  showCarousels = (listCarousel) => {
    return listCarousel.map((carousel, index) => {
      return <CarouseItem key={index} index={index} carousel={carousel} />;
    });
  };

  render() {
    let { carouselMovies } = this.props;
    return (
      <div>
        <div
          id="carouselMovies"
          className="carousel slide container px-5"
          data-ride="carousel"
          data-interval="false"
        >
          <div className="carousel-inner container carouselListMovie ">
            {this.showCarousels(carouselMovies)}
          </div>
          <div>
            <a
              className="carousel-control-prev"
              href="#carouselMovies"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-circle-left text_size_30"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselMovies"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-circle-right text_size_30"></i>
              
             
            </a>
          </div>
        </div>
      </div>
    );
  }
}
