import React, { Component } from "react"
import { Route, Link, Switch } from "react-router-dom"

import Navbar from "../Navbar"
import Home from "../Home"
import NotFound from "../NotFound"
import SignInPage from "../../containers/SignInPage"
import SignUpPage from "../../containers/SignUpPage"


import style from "./style"

class App extends Component {
  render() {
    return (
      <div id="app" className={style.app}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/sign-in" component={SignInPage}/>
          <Route path="/sign-up" component={SignUpPage}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App