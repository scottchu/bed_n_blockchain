import React, { Component } from "react"
import { Route, Link, Switch } from "react-router-dom"

import AccountPage from "../AccountPage"
import HomePage from "../HomePage"
import Navbar from "../Navbar"
import NotFound from "../NotFound"
import SignInPage from "../SignInPage"
import SignUpPage from "../SignUpPage"

import SignOut from "../../containers/SignOut"

import style from "./style"

class App extends Component {
  render() {
    return (
      <div id="app" className={style.app}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/account" component={AccountPage}/>
          <Route path="/sign-in" component={SignInPage}/>
          <Route path="/sign-up" component={SignUpPage}/>
          <Route path="/sign-out" component={SignOut}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App