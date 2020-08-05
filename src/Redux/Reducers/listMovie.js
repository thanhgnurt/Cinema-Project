import * as actionTypes from '../Constants/ActionTypes';

let initialState = [

]

let listMovie = (state=initialState, action)=>{
    switch (action.type) {
      case actionTypes.FETCH_LIST_MOVIE:
      state = action.listMovie;
      return [...state];
      
        default:
            return [...state]
    }
}

export default listMovie;