import React, { Component } from 'react'
import "./NavSelectStyle.css"

export default class NavSelect extends Component {
    render() {
        return (
            <div>
                <div className="container text-center bg_schedule_btn ">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-light dropdown-toggle pr_50"
                  data-toggle="dropdown"
                >
                  Phim
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Phim Hoạt họa
                  </a>
                  <a className="dropdown-item" href="#">
                    Phim hành động
                  </a>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-light dropdown-toggle pr_50"
                  data-toggle="dropdown"
                >
                  Rạp
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Sài Gòn
                  </a>
                  <a className="dropdown-item" href="#">
                    Hà Nội
                  </a>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-outline-light dropdown-toggle px-2"
                    data-toggle="dropdown"
                  >
                    Ngày xem
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Hôm nay
                    </a>
                    <a className="dropdown-item" href="#">
                      Ngày mai
                    </a>
                  </div>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-light dropdown-toggle px-2"
                  data-toggle="dropdown"
                >
                  Xuất chiếu
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    12:00
                  </a>
                  <a className="dropdown-item" href="#">
                    24:00
                  </a>
                </div>
              </div>
              
              <a type="button" className=" button_buy_now  ml-5 ">
                Mua vé ngay
              </a>
            </div>
            </div>
        )
    }
}
