import React, { Component } from 'react';
import './styleCinemas.css';
import ListBrandCinemas from './../ListBrandCinema';
import ListCinemas from '../ListCinema';
import {connect} from 'react-redux';

class Cinemas extends Component {
   
    render() {
        let {listCinema}= this.props
        return (
            <div className="container cinemas_module mt-5">
                <ListBrandCinemas listCinema={listCinema}/>
                <ListCinemas/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        listCinema : state.listCinema
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
        
       
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Cinemas)