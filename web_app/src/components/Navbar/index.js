import React, { Component } from "react"
import { Link } from "react-router-dom"

import _ from "./style"
console.log(_)
class Navbar extends Component {
  render() {
    return (
      <div className={_.container}>
        <div className={_.logo}>
          <a href="/">
            <h1>
              <span>
                B
              </span>
              ed'
              <span>
                N
              </span>
              '
              <span>
                B
              </span>
              lockchain
            </h1>
          </a>
        </div>
        <div className={_.menu}>
          <ul>
            <li>
              <Link to="/session">Sign Up / Sign In</Link>
            </li>
            <li>
              <Link to="/rooms/new">Post a Room</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar