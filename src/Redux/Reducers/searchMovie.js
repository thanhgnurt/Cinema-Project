import * as actionTypes from "./../Constants/ActionTypes";

var initialState = {
  keySearch: "",
  
};

var searchMovie = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.KEY_SEARCH:
      let keySearch = action.keySearch;
      state = {...state, keySearch}
      return {...state}
    default:
      return { ...state };
  }
};
export default searchMovie;
