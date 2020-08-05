import React, { Component } from "react";
import "./headerStyle.css";
import { connect } from "react-redux";
import * as actions from "./../../../../Redux/Actions/index.js";

var theCities = [
  "Hồ Chí Minh",
  "Hà Nội",
  "Đà Nẵng",
  "Hải Phòng",
  "Biên Hoà",
  "Nha Trang",
  "Bình Dương",
  "Phan Thiết",
  "Hạ Long",
  "Cần Thơ",
  "Vũng Tàu",
  "Quy Nhơn",
  "Huế",
  "Long Xuyên",
  "Thái Nguyên",
  "Buôn Ma Thuột",
  "Bắc Giang",
  "Bến Tre",
  "Việt Trì",
  "Ninh Bình",
  "Thái Bình",
  "Vinh",
  "Bảo Lộc",
  "Đà Lạt",
  "Trà Vinh",
  "Yên Bái",
  "Kiên Giang",
  "Vĩnh Long",
  "Cà Mau",
  "Hậu Giang",
  "Tây Ninh",
  "Tuyên Quang",
  "Thanh Hóa",
  "Nam Định",
  "Hải Dương",
  "Gia Lai",
  "Hà Tĩnh",
  "Phú Yên",
  "Bạc Liêu",
  "Long An",
  "Đồng Hới",
  "Hà Nam",
  "Bắc Ninh",
  "Quảng Trị",
  "Kon Tum",
  "Sóc Trăng",
  "Sơn La",
  "Lạng Sơn",
  "Quảng Ngãi",
  "Mỹ Tho",
  "Đồng Tháp",
  "Hưng Yên",
];

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      theCity: "Hồ Chí Minh",
    };
  }

  showTheCiTies = (theCities) => {
    let result = [];
    theCities.forEach((theCity, index) => {
      result.push(
        <li
          key={index}
          ng-repeat="location in listLocations"
          className="ng-scope px-2"
          onClick={() => this.onSelectCity(theCity)}
        >
          <span data-name={theCity}>{theCity}</span>
        </li>
      );
    });
    return result;
  };

  onSelectCity = (theCity) => {
    this.setState({
      theCity,
    });
  };

  onChangeSearch = (event) => {
    let { value } = event.target;
    this.props.actKeySearch(value);
  };
  onSearch = (event) => {
    let { keySearch } = this.props.searchMovie;
    event.preventDefault();
    this.props.actSearchMovie(keySearch);
  };

  render() {
    let { userLogin } = this.props;
    let { keySearch } = this.props.searchMovie;

    return (
      <div className="heading">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <form onSubmit={this.onSearch} className="searchHeader">
                <div className="input_search mr-2">
                  <input
                    className="px-2"
                    placeholder="search...?"
                    onChange={this.onChangeSearch}
                    value={keySearch}
                  />
                </div>
                <button type="submit" className="text-light btn ">
                  <i className="fa fa-search " />
                </button>
              </form>

              <div className="sign_up text-light">
                <div href="home" className="text-light">
                  {userLogin.loginResult ? (
                    <div className="dropdown show text-light">
                      <div
                        className="dropdown-toggle text-light"
                        href="home"
                        type="button"
                        id="dropdownMenuLinkUser"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-user mr-1  mr-2 " />
                        <span className="user_login">

                        {userLogin.username}
                        </span>
                      </div>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLinkUser"
                      >
                        <a className="dropdown-item" href="home">
                          <i className="fa fa-sign-out mr-2" />
                          Sign Out
                        </a>
                        <a className="dropdown-item" href="home">
                          <i className="fa fa-cog mr-2" />
                          Setting Account
                        </a>
                        <a className="dropdown-item" href="home">
                          Something else here
                        </a>
                      </div>
                    </div>
                  ) : (
                    <a
                      href="/"
                      className=" text-light "
                      data-toggle="modal"
                      data-target="#myModalSignUp"
                      onClick={this.props.actResetFormSignUp}
                    >
                      <i className="fa fa-user-plus mr-2 text_size_16" />
                      Sign Up
                    </a>
                  )}
                </div>
              </div>
              <div
                className="dropdown-toggle selectMenu white ng-binding text-light"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                <span>
                  <i className="fa fa-map-marker mr-2"/>
                  {this.state.theCity}
                </span>
              </div>
              <ul className="dropdown-menu selectScroll">
                {this.showTheCiTies(theCities)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    actResetFormSignUp: () => {
      dispatch(actions.actResetFormSignUp());
    },
    actKeySearch: (keySearch) => {
      dispatch(actions.actKeySearch(keySearch));
    },
    actSearchMovie: (keySearch) => {
      dispatch(actions.actSearchMovie(keySearch));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin,
    searchMovie: state.searchMovie,
    listMovie: state.listMovie,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
