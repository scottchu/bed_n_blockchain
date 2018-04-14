import React, { Component } from "react"
import { Route, Link, Switch } from "react-router-dom"

import Home from "../Home"
import NotFound from "../NotFound"

import style from "./style"

class App extends Component {
  render() {
    return (
      <div id="app" className={style.app}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/random">404</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App