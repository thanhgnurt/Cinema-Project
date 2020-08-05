import * as actionTypes from './../Constants/ActionTypes';

let initialState=[];

let cinemaBySupplier = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.FETCH_LIST_CINEMA_BY_SUPPLIER:
            state = action.listCinemaBySupplier
            
            return [...state]
    
        default:
            return [...state]
    }
}

export default cinemaBySupplier