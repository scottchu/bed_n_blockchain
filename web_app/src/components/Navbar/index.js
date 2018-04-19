import React, { Component } from "react"
import { Link } from "react-router-dom"

import _ from "./style"

class Navbar extends Component {
  render() {
    return (
      <div className={_.container}>
        <div className={_.logo}>
          <a href="/">
            <h1>
              <span>B</span>ed'
              <span>N</span>'
              <span>B</span>lockchain
            </h1>
          </a>
        </div>
        <div className={_.menu}>
          <ul>
            <li>
              <Link to="/rooms/new">Become a host</Link>
            </li>
            <li>
              <Link to="/session">Sign up / Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar