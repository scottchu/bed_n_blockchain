import React, { Component } from "react"
import { Route, Link, Switch } from "react-router-dom"

import Navbar from "../Navbar"
import Home from "../Home"
import NotFound from "../NotFound"
import Session from "../Session"

import style from "./style"

class App extends Component {
  render() {
    return (
      <div id="app" className={style.app}>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/session" component={Session}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App