import React, { Component } from "react";
import Menu from "./../../Components/Menu/Menu.js";
import Login from "../../Components/Signup_Login/SignIn";
import SignUpContainer from "../../Container/SignUpContainer";
import ScheduleMovie from "../../Components/SelectMovie/ScheduleMovie/ScheduleMovie";
import { Route, Switch } from 'react-router-dom';
import routes from '../../../Routes';
import ComponentFree from "../ConponentFree/ComponentFree.js";
import Cinemas from "../../Components/Cinemas/Cinemas/index.js";

export default class HomePage extends Component {
  showContentMenu = (routes) => {
   
    let result = 0;
    result = routes.map((route, index)=>{
      return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    })
    return <Switch>{result}</Switch>
  }

  render() {
    return (
      <div>        
        <Menu />
        <Login />
        <SignUpContainer />
        <ScheduleMovie />
        {this.showContentMenu(routes)}
        <Cinemas/>
        <ComponentFree/>

        
      </div>
    );
  }
}
