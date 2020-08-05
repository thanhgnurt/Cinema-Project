import * as actionTypes from './../Constants/ActionTypes';

var initialState = {
    trailer : '',
    frameMovie : true
}

var viewTrailer = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.VIEW_TRAILER:
            
            return {...state};
        case actionTypes.OPEN_MODAL_TRAILER:
            console.log(action.trailer);
            
            state = {
                trailer : action.trailer,
                frameMovie : true
            }
            
            return {...state}
        case actionTypes.CLOSE_MODAL_TRAILER:
            state.frameMovie = false;
            return {...state}
    
        default:
            return {...state};
    }
}
export default viewTrailer