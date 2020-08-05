import { combineReducers  } from 'redux';
import userSignUp from './userSignUp';
import validSignUp from './validSignUp';
import listMovie from './listMovie';
import userLogin from './userLogin';
import searchMovie from './searchMovie';
import viewTrailer from './viewTrailer';
import galleryView from './galleryView';
import nowOrWill from './nowOrWill';
import listCinema from './listCinema';
import listCinemaBySupplier from './cinemaBySupplier';
import listMovieCinema from './listMovieCinema'

var myReducer = combineReducers ({
    userSignUp,
    validSignUp,
    listMovie,
    userLogin,
    searchMovie,
    viewTrailer,
    galleryView,
    nowOrWill,
    listCinema,
    listCinemaBySupplier,
    listMovieCinema,
});

export default myReducer;