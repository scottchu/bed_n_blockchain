import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import AccountPage from "../AccountPage"
import HomePage from "../HomePage"
import NotFound from "../NotFound"
import PropertyPage from "../PropertyPage"
import SignInPage from "../SignInPage"
import SignUpPage from "../SignUpPage"

import Navbar from "../../containers/Navbar"
import SignOut from "../../containers/SignOut"

import { withStyle } from "../../common/css"
import style from "./style"

class App extends Component {
  render() {
    const { style } = this.props
    return (
      <div id="app" className={style.app}>
        <div className={style.appInner}>
          <div className={style.navbar}>
            <Navbar />
          </div>
          <div className={style.content}>
            <Switch>
              <Route
                exact path="/"
                component={HomePage}/>

              <Route
                path="/property/:id"
                component={PropertyPage} />
              <Route
                path="/account"
                component={AccountPage} />
              <Route
                path="/sign-in"
                component={SignInPage} />
              <Route
                path="/sign-up"
                component={SignUpPage} />
              <Route
                path="/sign-out"
                component={SignOut}/>

              <Route
                component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyle(style)(App)