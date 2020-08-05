import * as actionTypes from './../Constants/ActionTypes';

let initialState = [];

let listMovieCinema = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.FETCH_LIST_MOVIE_CINEMA:
          state = action.listMovieCinema
            
            
            return [...state]
    
        default:
            return [...state]
    }
}
export default listMovieCinema