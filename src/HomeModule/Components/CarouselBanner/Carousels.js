import React, { Component } from "react";
import "./carouselStyle.css";
import CarouseItem from "./CarouseItem";

var listCarouselBanner = [
  {
    id : '001',
    nameMovie : "Avengers : End Game",
    url : "/movie/StarTrekBeyond.mp4",
    casts : "Robert Downey Jr, Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Bradley Cooper, Josh Brolin, ...",
    rating : 4.5,
    expectedRelease : "30/05/2020",
    trailer : 'https://www.youtube.com/embed/TcMBFSGVi1c'
 
  },
  {
    id : '002',
    nameMovie : "Fury",
    url : "/movie/HowToTrainDargon.mkv",
    casts : "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
    rating : 3.5,
    expectedRelease : "29/05/2020",
    trailer : 'https://www.youtube.com/embed/-Aa4ym5Me-I'
  },
  {
    id : '003',
    nameMovie : "Mad Max : Fury Road",
    url : "/movie/MadMax.mp4",
    casts : "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    rating : 4.5,
    expectedRelease : "01/06/2020",
    trailer : 'https://www.youtube.com/embed/hEJnMQG9ev8'
  },
  {
    id : '004',
    nameMovie : "Rio",
    url : "/movie/EndGame.mkv",
    casts : "When Blu, a domesticated macaw from small-town Minnesota, meets the fiercely independent Jewel, he takes off on an adventure to Rio de Janeiro with the bird of his dreams.",
    rating : 4,
    expectedRelease : "30/05/2020",
    trailer : 'https://www.youtube.com/embed/-Aa4ym5Me-I'
  },
]

export default class Carousels extends Component {
  showCarousels = (listCarouselBanner) =>{
    return listCarouselBanner.map((carousel, index)=>{
      return <CarouseItem key={carousel.id} index = {index} carousel={carousel} />
    })
  }
  render() {

    return (
      
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          data-interval="false"
        >
          <ol className="carousel-indicators carousel_indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active"/>
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            {this.showCarousels(listCarouselBanner)}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-chevron-left bannerClickLeft"></i>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-chevron-right bannerClickRight"></i>
          </a>
        </div>
      
    );
  }
}
