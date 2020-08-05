import * as actionTypes from './../Constants/ActionTypes'

let initialState = {
    username: "",
    password: "",
    rememberMe: true,
    loginResult : false
}

let userLogin = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.INPUT_LOGIN_USER:
            let {name, value}= action
            let userLogin = {...state, [name]:value}
            state = userLogin
            return {...state}
        case actionTypes.CHECK_LOGIN_USER:
            state.loginResult = true;
            console.log(state);
            
            return {...state}
    
        default:
            return {...state}
    }
}

export default userLogin