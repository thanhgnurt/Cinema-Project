import React, { Component } from "react";
import "./NavBarStyle.css";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";

const menus = [
  {
    name: "HOME",
    to: "/",
    exact: true,
  },
  {
    name: "NEWS",
    to: "/news",
    exact: false,
  },
  {
    name: "WHAT'S ON",
    to: "/whats-on",
    exact: false,
  },
  {
    name: "SHORTCODES",
    to: "/shortcodes",
    exact: false,
  },
  {
    name: "CONTRACT US",
    to: "/contact-us",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active_navbar" : "";
        return (
          <li className={`nav-item  mx-lg-2 my-lg-0 ${active}`}>
            <Link className="nav-link" to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgHome: "",
      bgNews: "",
    };
  }

  showMenu = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }

    return result;
  };

  onClick = (chart) => {
    let bgHome = this.state.bgHome;
    let bgNews = this.state.bgNews;
    if (chart === "home") {
      bgHome = "bgHome";
      bgNews = "";
    }
    if (chart === "news") {
      bgHome = "";
      bgNews = "bgNews";
    }
    this.setState({
      bgHome,
      bgNews,
    });
  };

  render() {
    let { userLogin } = this.props;
    return (
      <div className="main-top menuMain">
        <nav className="navbar_mobile navbar navbar-expand-lg navbar-dark fixed-navi ">
          <div className="container">
            <h1>
              <Link
                className="navbar-brand font-weight-bold font-italic text-light"
                to="/"
              >
                <span className=" text_logo">S</span>EA Movie
                <i className="fas fa-syringe" />
              </Link>
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse text-center text-light"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-lg-auto">{this.showMenu(menus)}</ul>
              {!userLogin.loginResult ? (
                <a
                  href="home"
                  className="login-button ml-lg-5 mt-lg-0 mt-4 mb-lg-0 mb-3"
                  data-toggle="modal"
                  data-target="#myModalLogin"
                >
                  <i className="	fa fa-sign-in mr-2 pb-2 " />
                  SIGN IN
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin,
  };
};

export default connect(mapStateToProps, null)(NavBar);
