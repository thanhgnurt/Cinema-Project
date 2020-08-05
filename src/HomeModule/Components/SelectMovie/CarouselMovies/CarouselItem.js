import React, { Component } from "react";
import MovieItem from "./MovieItem"


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

  showMovie = (listMovie)=>{
    return listMovie.map((movie, index)=>{
        return <MovieItem movie={movie} key={index}/>
    })
  }
  
 

  render() {
      let {carousel} = this.props
      
      
    return (
      <div className={`carousel-item container  ${this.state.active}`}>
          <div className="row"> {this.showMovie(carousel)}</div>
      </div>
    );
  }
}


export default CarouseItem
