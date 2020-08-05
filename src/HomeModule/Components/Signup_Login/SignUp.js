import React, { Component } from "react";
import "./signupStyle.css";

export default class SignUp extends Component {
   
   render() {
      let {
         username,
         password,
         email,
         rePassword,
         firtLastName,
         onSubmit,
         onChange,
         errorValidation,
         validSignUp,
      } = this.props;
      return (
         <div className="container singup">
            <div className="modal" id="myModalSignUp">
               <div className="signupform">
                  <br />
                  <div className="container">
                     <div className="agile_info">
                        <div className="w3l_form hide_mobile">
                           <div className="left_grid_info">
                              <img src="/img/signUpBanner.jpg" alt="login" />
                           </div>
                        </div>
                        <div className="w3_info">
                           <button
                              type="button"
                              className="close closeModal"
                              data-dismiss="modal"
                           >
                              <i className="fa fa-times-circle"></i>
                           </button>

                           <h2>WellCome To SeaMovie</h2>
                           <p>Please Sign Up</p>
                           <form onSubmit={onSubmit}>
                              <div className="input-group">
                                 <span>
                                    <i className="fa fa-user mr-3" aria-hidden="true" />
                                 </span>
                                 <input
                                    type="text"
                                    placeholder="Firt & Last Name"
                                    name="firtLastName"
                                    value={firtLastName}
                                    onChange={onChange}
                                    onKeyUp={errorValidation}
                                    onBlur={errorValidation}
                                 />

                                 <span className="tooltipp">
                                    <i
                                       className={
                                          validSignUp.firtLastNameValid===false
                                             ? "fa fa-exclamation-circle ml-3 text-danger"
                                             : ""
                                       }
                                    />
                                    <span className="tooltiptext">
                                       {validSignUp.firtLastName}
                                    </span>
                                 </span>
                              </div>
                              <div className="input-group">
                                 <span>
                                    <i className="fa fa-user mr-3" aria-hidden="true" />
                                 </span>
                                 <input
                                    type="text"
                                    placeholder="User Name"
                                    name="username"
                                    value={username}
                                    onChange={onChange}
                                    onKeyUp={errorValidation}
                                    onBlur={errorValidation}
                                 />

                                 <span className="tooltipp">
                                    <i
                                       className={
                                          validSignUp.usernameValid===false
                                             ? "fa fa-exclamation-circle ml-3 text-danger"
                                             : ""
                                       }
                                    />
                                    <span className="tooltiptext">
                                       {validSignUp.username}
                                    </span>
                                 </span>
                              </div>
                              <div className="input-group">
                                 <span>
                                    <i className="fa fa-at mr-3"></i>
                                 </span>
                                 <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    onKeyUp={errorValidation}
                                    onBlur={errorValidation}
                                 />
                                 <span className="tooltipp">
                                    <i
                                       className={
                                          validSignUp.emailValid===false
                                             ? "fa fa-exclamation-circle ml-3 text-danger"
                                             : ""
                                       }
                                    />
                                    <span className="tooltiptext">
                                       {validSignUp.email}
                                    </span>
                                 </span>
                              </div>

                              <div className="input-group">
                                 <span>
                                    <i className="fa fa-lock mr-3" aria-hidden="true" />
                                 </span>
                                 <input
                                    type="Password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    onKeyUp={errorValidation}
                                    onBlur={errorValidation}
                                 />
                                 <span className="tooltipp">
                                    <i
                                       className={
                                          validSignUp.passwordValid===false
                                             ? "fa fa-exclamation-circle ml-3 text-danger"
                                             : ""
                                       }
                                    />
                                    <span className="tooltiptext">
                                       {validSignUp.password}
                                    </span>
                                 </span>
                              </div>

                              <div className="input-group">
                                 <span>
                                    <i className="fa fa-lock mr-3" aria-hidden="true" />
                                 </span>
                                 <input
                                    type="Password"
                                    placeholder="Repassword"
                                    name="rePassword"
                                    value={rePassword}
                                    onChange={onChange}
                                    onKeyUp={errorValidation}
                                    onBlur={errorValidation}
                                 />
                                 <span className="tooltipp">
                                    <i
                                       className={
                                          validSignUp.rePasswordValid===false
                                             ? "fa fa-exclamation-circle ml-3 text-danger"
                                             : ""
                                       }
                                    />
                                    <span className="tooltiptext">
                                       {validSignUp.rePassword}
                                    </span>
                                 </span>
                              </div>

                              <button
                                 className="btn btn-danger mt-5 text-center"
                                 type="submit"
                                 disabled={!validSignUp.totalValid}
                              >
                                 Sign Up
                    </button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
