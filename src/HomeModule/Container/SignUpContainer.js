import React, { Component } from 'react';
import SignUp from './../Components/Signup_Login/SignUp';
import { connect } from 'react-redux';
import * as actions from './../../Redux/Actions/index';
import PropTypes from 'prop-types';

class SignUpContainer extends Component {


    onChange = (event) => {
        let { name, value } = event.target;
        this.props.actUserSignUp(name, value)

    };

    onSubmit = (event) => {
        event.preventDefault();

    };

    errorValidation = (event) => {
        let { name, value } = event.target;
        let { usernameValid, emailValid, firtLastNameValid, passwordValid, rePasswordValid, totalValid } = this.props.validSignUp
        let { password } = this.props.userSignUp
        let messageValidation = (value === '' ? "Do not leave a blank" : '')
       
            switch (name) {
                case 'username':
                    usernameValid = messageValidation !== '' ? false : true
                    if (value.length < 6 && value.length > 0) {
                        messageValidation = 'You must input more than six charater';
                        usernameValid = false
                    }
                    break;

                case 'email':
                    emailValid = messageValidation !== '' ? false : true
                    if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value.length > 0) {
                        messageValidation = 'You need input correct format'
                        emailValid = false
                    }
                    break;

                case 'firtLastName':
                    firtLastNameValid = messageValidation !== '' ? false : true
                    if (value.length < 6 && value.length > 0) {
                        messageValidation = 'Please enter your full name'
                        firtLastNameValid = false
                    }
                    break;

                case 'password':
                    passwordValid = messageValidation !== '' ? false : true
                    if (value.length < 6 && value.length > 0) {
                        messageValidation = 'Password needs over 6 characters'
                        passwordValid = false
                    }
                    break;
                case 'rePassword':
                    rePasswordValid = messageValidation !== '' ? false : true
                    if (password !== value || (password===value && value.length < 6 && value.length > 0) ) {
                        messageValidation = 'Password and repassword must be the same'
                        rePasswordValid = false
                        
                        
                    }
                    break;
                default:
                    break;
            
        }


        totalValid = (usernameValid && emailValid && firtLastNameValid && passwordValid && rePasswordValid)

        let formValid = {
            ...this.props.validSignUp,
            [name]: messageValidation,
            usernameValid,
            emailValid,
            firtLastNameValid,
            passwordValid,
            rePasswordValid,
            totalValid,
        }
        this.props.actErrorValidation(formValid)


    }

    render() {
        let {
            username,
            password,
            email,
            rePassword,
            firtLastName,

        } = this.props.userSignUp;
        let { validSignUp } = this.props
        return (
            <SignUp
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                username={username}
                email={email}
                password={password}
                rePassword={rePassword}
                firtLastName={firtLastName}
                errorValidation={this.errorValidation}
                validSignUp={validSignUp}

            />
        )
    }
}


SignUpContainer.propType={
    userSignUp : PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        firtLastName: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        rePassword: PropTypes.string.isRequired,
    }).isRequired,
    validSignUp : PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        firtLastName: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        rePassword: PropTypes.string.isRequired,
    }).isRequired,
    actUserSignUp : PropTypes.func.isRequired,
    actErrorValidation : PropTypes.func.isRequired
}






const mapStateToProps = (state) => {
    return {
        userSignUp: state.userSignUp,
        validSignUp: state.validSignUp,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actUserSignUp: (keyUser, valueUser) => {
            dispatch(actions.actUserSignUp(keyUser, valueUser))
        },
        actErrorValidation: (formValid) => {
            dispatch(actions.actErrorValidation(formValid))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)
