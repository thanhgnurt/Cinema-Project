import React, { Component } from 'react'

export default class MovieCinemaItem extends Component {
    render() {
        let {movie}= this.props
        return (
        <li className="list-group-item">{movie.tenPhim}</li>
        )
    }
}
