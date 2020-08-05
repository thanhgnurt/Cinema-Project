import React, { Component } from "react";
import "./styleGalleryViewMovie.css";
import { connect } from "react-redux";
import * as actions from "./../../../../Redux/Actions/index";

class GalleryViewMovie extends Component {
  state = {
    viewIcon: "fa fa-th",
    groupMovieNow: "groupMovie",
    groupMovieWill: "",
  };
  onGroupMovie = (status) => {
    if (status === "now") {
      this.props.onShowGroupMovie(false)
      this.setState({
        viewIcon: this.state.viewIcon,
        groupMovieNow: "groupMovie",
        groupMovieWill: "",
      });
    } else if (status === "will") {
      this.props.onShowGroupMovie(true)
      this.setState({
        viewIcon: this.state.viewIcon,
        groupMovieNow: "",
        groupMovieWill: "groupMovie",
      });
    }
  };

  onGalleryView = (quantiView, viewIcon) => {
    console.log(viewIcon);

    this.props.onGalleryView(quantiView);
    this.setState({
      viewIcon,
    });
  };
  render() {
    let { col } = this.props.galleryView;
    return (
      <div className="gallery_view container">
        <div className="dropdown dropdown_gallery_view">
          <div className="will_now_movie  ">
            <span
              type="button"
              data-target="#carouselMovies"
              data-slide-to={0}
              className={`${this.state.groupMovieNow} px-2 ml-4 `}
              onClick={() => this.onGroupMovie("now")}
            >
              Đang Chiếu
            </span>
            <span
              type="button"
              data-target="#carouselMovies"
              data-slide-to={0}
              className={`${this.state.groupMovieWill} px-2 ml-2`}
              onClick={() => this.onGroupMovie("will")}
            >
              Sắp Chiếu
            </span>
          </div>

          <div
            className="dropdown-toggle view_icon"
            type="button"
            data-toggle="dropdown"
          >
            <i className={this.state.viewIcon}></i>
          </div>

          <ul className="dropdown-menu dropdown-menu-right dropdown_gallery">
            <li
              data-target="#carouselMovies"
              data-slide-to={0}
              type="button"
              className="pl-3 pb-2 active"
              onClick={() => this.onGalleryView(6, "fa fa-th-large")}
            >
              <span className="fa fa-th-large"></span>
              {col === 4 ? <i className="fa fa-check ml-2"></i> : ""}
            </li>
            <li
              data-target="#carouselMovies"
              data-slide-to={0}
              type="button"
              className="pl-3 pb-2 active"
              onClick={() => this.onGalleryView(8, "fa fa-th")}
            >
              <span className="fa fa-th"></span>
              {col === 3 ? <i className="fa fa-check ml-2"></i> : ""}
            </li>
            <li
              data-target="#carouselMovies"
              data-slide-to={0}
              type="button"
              className="pl-3 pb-2 active"
              onClick={() => this.onGalleryView(12, "fa fa-table")}
            >
              <span className="fa fa-table"></span>
              {col === 2 ? <i className="fa fa-check ml-2"></i> : ""}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    galleryView: state.galleryView,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGalleryView: (quantiView, listMovie) => {
      dispatch(actions.actOnGalleryView(quantiView, listMovie));
    },
    onShowGroupMovie :(status) =>{
      dispatch(actions.actOnShowGroupMovie(status))
    } 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GalleryViewMovie);
