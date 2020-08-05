import * as actionTypes from "./../Constants/ActionTypes";

let initialState = {
  quantiView: 8,
  col: 3,
};

let galleryView = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GALLERY_VIEW_MOVIE:
      let stem = action.quantiView / 2;
      let col = 12 / stem;
      state.quantiView = action.quantiView;
      state.col = col;
      return { ...state };

    default:
      return { ...state };
  }
};

export default galleryView;
