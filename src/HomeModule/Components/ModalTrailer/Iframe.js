import React, { Component } from 'react';
import {connect} from 'react-redux';


class Iframe extends Component {
    render() {
        return (
            <iframe
                title='Trailer movie'
                width={798}
                height={500}
                src={this.props.viewTrailer.trailer}
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
        )
    }
}
const mapStateToProps = state =>{
    return {
        viewTrailer : state.viewTrailer

    }
}

export default connect (mapStateToProps, null) (Iframe)
