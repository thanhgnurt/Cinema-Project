import * as actionTypes from './../Constants/ActionTypes';

let initialState = [];

let listCinema = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.FETCH_LIST_CINEMA:
        state = action.listCinema;
        return [...state];
        
          default:
              return [...state]
      }
}

export default listCinema