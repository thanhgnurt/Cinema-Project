import React, { Component } from "react";
import "./styleCarousel.css";
import { connect } from "react-redux";
import * as actions from "./../../../../Redux/Actions/index";

class MovieItem extends Component {
  onClickTrailer = (trailer) => {
    this.props.onClickTrailer(trailer);
  };

  showRating = (rating) => {
    let element = [];
    rating = rating / 2;
    if (rating < 6) {
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
    }
  };

  render() {
    let { movie, galleryView, nowOrWill } = this.props;
    
    return (
      <div className={`col-sm-${galleryView.col} movieItem`}>
        <div className="row jus_center">
          <div className="shadow-sm">
            <div
              className="filmThumbnail"
              style={{
                backgroundImage: `url("${movie.hinhAnh}"), url("./img/imgNotFound.png")`,
              }}
            >
              <div
                className="hoverInfo showHover showingDetail"
                data-id={2274}
                data-slug="2274-gai-gia-lam-chieu-3"
              >
                <button
                  className="playTrailer ng-scope"
                  type="button"
                  tabIndex={0}
                  data-toggle="modal"
                  data-target="#modalTrailer"
                  onClick={() => this.onClickTrailer(movie.trailer)}
                >
                  <img alt="img default" src="./img/play-video.png" />
                </button>
              </div>
              <span className="showRatting text-center">
                <p className="text-light pointMovie">{movie.danhGia}</p>
                <p className="startRatting ">
                  {this.showRating(movie.danhGia)}
                </p>
              </span>
              <span className="showGroudPhim">
                <p className="text-light">{movie.maPhim}</p>
              </span>
              {nowOrWill===true ? <span className="showPremiereDate">
                <p className="text-light">{movie.ngayKhoiChieu}</p>
              </span>
              : ""}
              
              
            </div>
            <div className="info">
              <div className="nameFilm hideHover ng-binding ng-scope">
                {movie.tenPhim}
              </div>
              <div className="showHover buy_now_btn">
                <button
                  ng-if="film.has_session === 1"
                  ui-sref="main.detail({slug:film.film_slug})"
                  className="btn btn-outline-warning buyNow showingDetail ng-scope"
                  data-id={2274}
                  data-slug="2274-gai-gia-lam-chieu-3"
                  href="/phim/2274-gai-gia-lam-chieu-3"
                  tabIndex={0}
                >
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    galleryView : state.galleryView,
    nowOrWill : state.nowOrWill
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onClickTrailer: (trailer) => {
      dispatch(actions.onClickTrailer(trailer));
      
    },
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
