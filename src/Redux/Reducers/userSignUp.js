import * as actionTypes from '../Constants/ActionTypes';

let initialState = {
    username: "",
    email: "",
    firtLastName: "",
    password: "",
    rePassword: "",
}

let userSignUp = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.USER_SIGN_UP:
            let {keyUser, valueUser} = action
            state = {...state, [keyUser]: valueUser}
            return {...state}
        case actionTypes.RESET_FORM_SIGN_UP:
            state = {
                username: "",
                email: "",
                firtLastName: "",
                password: "",
                rePassword: "",
            }
            return {...state}
        default:
            return {...state}
    }
}

export default userSignUp