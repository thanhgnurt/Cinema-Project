import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styles from "./styles";
import { connect } from "react-redux";
import * as actions from "./../../../../Redux/Actions/index";

class ListBrandCinemas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  componentDidMount(){
    this.props.fetchListMovieCinemaRequest()
    this.props.fetchListCinemaBySupplierRequest()
    this.props.fetchListCinemaRequest()
}

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };
  onFetchCinemaSystem = (codeCinema) => {
    this.props.onFetchCinemaSystem(codeCinema);
  };
  showListCinema = (listCinema) => {
    let result = null;
    result = listCinema.map((cinema, index) => {
      return (
        <Tab
          onClick={() => this.onFetchCinemaSystem(cinema.maHeThongRap)}
          label={cinema.tenHeThongRap}
          key={cinema.maHeThongRap}
          className="item_brand_cinemas mb-1"
          style={{
            backgroundImage: `url(${cinema.logo})`,
            backgroundSize: "30px 30px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      );
    });
    return result;
  };
  render() {
    let { classes, listCinema } = this.props;
    let { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            {this.showListCinema(listCinema)}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchCinemaSystem: (codeCinema) => {
      dispatch(actions.onFetchCinemaSystem(codeCinema));
    },
    fetchListCinemaRequest : ()=>{
      dispatch(actions.fetchListCinemaRequest())
  },
  fetchListMovieCinemaRequest: () => {
      dispatch(actions.fetchListMovieCinemaRequest());
    },
    fetchListCinemaBySupplierRequest : ()=>{
      dispatch(actions.fetchListCinemaBySupplierRequest())
  },
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ListBrandCinemas)
);
