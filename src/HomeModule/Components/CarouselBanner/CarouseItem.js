import React, { Component } from "react";
import "./carouselStyle.css";
import {connect} from 'react-redux';
import * as actions from '../../../Redux/Actions/index'

class CarouseItem extends Component {
  constructor(props) {
    super();
    this.state = {
      active: "",
    };
  }
  componentDidMount() {
    let { index } = this.props;
    if (index === 0) {
      this.setState({
        active: "active",
      });
    } else {
      this.setState({
        active: "",
      });
    }
  }
  showRating = (rating) => {
    let element = [];
    for (let i = 1; i <= rating; i++) {
      element.push(<i className="fa fa-star" key={i} />);
    }
    if (rating % 1 !== 0) {
      element.push(<i className="fa fa-star-half-o" key="half" />);
    }
    for (let j = 1; j <= 5 - rating; j++) {
      element.push(<i className="fa fa-star-o" key={rating + j} />);
    }
    return element;
  };
  onClickTrailer = (trailer)=>{
    this.props.onClickTrailer(trailer)
  }

  render() {
    let { carousel } = this.props;
    let { rating } = carousel;

    return (
      <div className={`carousel-item item_img  ${this.state.active}`}>
        <header>
          <div className="overlay" />
          <video
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
            className=""
          >
            <source src={carousel.url} type="video/mp4" />
          </video>
          <div className="container ">
            <div className="d-flex align-items-center">
              <div className="w-100 text-white info_movie">
                <h1 className="display-3 font_size_30 font_bold">
                  {carousel.nameMovie}
                </h1>
                <div className="w-100 row mt-4">
                  <div className="col-6 pl-5 info_movie_left">
                    <h6 className="text-light text-left mt-2 font_size_20">
                      Expected release :
                      <span className="expected_release ml-3">
                        {carousel.expectedRelease}
                      </span>
                    </h6>
                    <h6 className="text-light text-left font_size_20">
                      Casts :
                      <p className="lead mb-0 font_size_20">{carousel.casts}</p>
                    </h6>
                    <a
                      href={carousel.trailer}
                      target="_bank"
                      className="trailer_movie font_size_18"
                      data-toggle="modal"
                      data-target="#modalTrailer"
                      onClick={()=>this.onClickTrailer(carousel.trailer)}
                    >
                      Trailer
                    </a>
                  </div>
                  <div className="col-6 info_movie_right pl-5">
                    <div>
                      <h6 className="text-light text-left font_size_20">
                        Rating :{" "}
                        <span className="font_size_18 ml-3">
                          {this.showRating(rating)}{" "}
                        </span>
                      </h6>
                    </div>
                    <div className="buy_ticket">
                      <button className="btn btn-outline-warning mt-3">
                        Buy Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props)=>{
  return {
    onClickTrailer : (trailer)=>{
      dispatch(actions.onClickTrailer(trailer))
    }
  }
}

export default connect(null, mapDispatchToProps) (CarouseItem)
