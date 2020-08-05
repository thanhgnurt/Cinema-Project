import React, { Component } from 'react';
import ModalTrailer from '../../Components/ModalTrailer/ModalTrailer';
import BackToTop from '../../Components/Footer/BackToTop';


export default class ComponentFree extends Component {
    render() {
        return (
            <div>
                <ModalTrailer/>
                <BackToTop/>
            </div>
        )
    }
}
