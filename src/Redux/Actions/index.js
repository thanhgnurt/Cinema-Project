import * as actionTypes from "./../Constants/ActionTypes";
import callApi from "./../../Utils/apiCaller";
import * as config from './../Constants/config'



export const actUserSignUp = (keyUser, valueUser) => {
  return {
    type: actionTypes.USER_SIGN_UP,
    keyUser,
    valueUser,
  };
};

export const actErrorValidation = (formValid) => {
  return {
    type: actionTypes.SIGN_UP_VALIDATION,
    formValid,
  };
};

export const actResetFormSignUp = () => {
  return {
    type: actionTypes.RESET_FORM_SIGN_UP,
  };
};
export const fetchListMovieRequest = ()=> {
    return dispatch => {
        return callApi('QuanLyPhim/LayDanhSachPhim?maNhom=GP01', "GET", null).then((res) => {
            dispatch(fetchListMovie(res.data, false));
          });
    }
}
export const fetchListMovie = (listMovie, status) => {
    return {
        type: actionTypes.FETCH_LIST_MOVIE,
        listMovie,
        status

    }
}
// export const fetchListMovieWill = listMovie=>{
//   return {
//     type: actionTypes.SHOW_GROUP_MOVIE_WILL,
//     listMovie
//   }
// }

export const actCheckUserLogin = () =>{
  return {
    type: actionTypes.CHECK_LOGIN_USER,
    
  }
}

export const actOnChangeLogin = (name, value) => {
  return {
    type: actionTypes.INPUT_LOGIN_USER,
    name,
    value

  }
}

export const actKeySearch = (keySearch) => {
  return {
    type: actionTypes.KEY_SEARCH,
    keySearch
  }
}
export const actSearchMovie = (keySearch) => {
  return {
    type: actionTypes.SEARCH_MOVIE,
    keySearch
  }
}
export const actViewTrailer = (urlTrailer)=>{
  return {
    type: actionTypes.VIEW_TRAILER,
    urlTrailer,
  }
}
export const onClickTrailer = (trailer)=>{
  return {
    type: actionTypes.OPEN_MODAL_TRAILER,
    trailer
  }
}
export const actCloseTrailer = ()=>{
  return {
    type: actionTypes.CLOSE_MODAL_TRAILER,
    
  }
}

export const actOnGalleryView = (quantiView) =>{
  
  return {
    type: actionTypes.GALLERY_VIEW_MOVIE,
    quantiView
  }
}

export const actOnShowGroupMovie = (status)=>{
  return dispatch =>{
    if (status === true) {
      return callApi('QuanLyPhim/LayDanhSachPhim?maNhom=GP01', "GET", null).then((res) => {
        dispatch(fetchListMovie(res.data, true));
      });
    } else {
      return callApi("QuanLyPhim/LayDanhSachPhim?maNhom=GP02", "GET", null).then((res)=>{
      dispatch(fetchListMovie(res.data, false))
    })
    }
  }
}

export const fetchListCinemaRequest = ()=> {
  return dispatch => {
      return callApi('QuanLyRap/LayThongTinHeThongRap', "GET", null).then((res) => {
          dispatch(fetchListCinema(res.data));
        });
  }
}
export const fetchListCinemaBySupplierRequest=()=>{
  return dispatch =>{
    return callApi("QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=BHDStar", "GET", null).then((res)=>{
      dispatch(fetchCinemaSystem(res.data))
    })
  }
}
export const fetchListCinema = (listCinema) => {
  return {
      type: actionTypes.FETCH_LIST_CINEMA,
      listCinema

  }
}
export const fetchCinemaSystem = (listCinemaBySupplier)=>{
  return{
    type : actionTypes.FETCH_LIST_CINEMA_BY_SUPPLIER,
    listCinemaBySupplier
  }
}

export const onFetchCinemaSystem=(codeCinema)=>{
  return dispatch=>{
    return callApi((config.API_MIDLE_CINEMA+codeCinema),"GET",null).then((res)=>{
      dispatch(fetchCinemaSystem(res.data))
    })

  }

}

export const fetchListMovieCinema=(listMovieCinema)=>{
  return{
    type: actionTypes.FETCH_LIST_MOVIE_CINEMA,
    listMovieCinema
  }
}

export const fetchListMovieCinemaRequest=()=>{
  return dispatch=>{
    return callApi("QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=GP01", "GET", null).then((res)=>{
      dispatch(fetchListMovieCinema(res.data))
    })
  }

}