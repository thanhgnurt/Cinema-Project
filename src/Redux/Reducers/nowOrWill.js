import * as actionTypes from '../Constants/ActionTypes';

let initialState =  false


let nowOrWill = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.FETCH_LIST_MOVIE:
            
            state = action.status
            
            return state
    
        default:
            return state
    }
}

export default nowOrWill