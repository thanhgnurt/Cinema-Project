import React, { Component } from "react";
import "./modalTrailer.css";
import { connect } from "react-redux";
import * as actions from "./../../../Redux/Actions/index";
import Iframe from "./Iframe";

class ModalTrailer extends Component {
  closeTrailer = () => {
    this.props.closeTrailer();
  };

  render() {
    let { frameMovie } = this.props.viewTrailer;

    return (
      <div
        className="modal fade"
        id="modalTrailer"
        role="dialog"
        onClick={this.closeTrailer}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close on_close"
                data-dismiss="modal"
                onClick={this.closeTrailer}
              >
                <i className="fa fa-times" />
              </button>
              {frameMovie ? <Iframe /> : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    viewTrailer: state.viewTrailer,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    closeTrailer: () => {
      dispatch(actions.actCloseTrailer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalTrailer);
