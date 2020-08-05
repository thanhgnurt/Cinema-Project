import React, { Component } from 'react'
import Header from './Header/Header'
import './MenuStyle.css'
import Carousels from '../CarouselBanner/Carousels'
import NavBar from './Navbar/NavBar'


export default class IndexMenu extends Component {
    render() {
        return (
            <div className='mainTop'>
                <Header />
                <NavBar />
                <Carousels />


            </div>
        )
    }
}
