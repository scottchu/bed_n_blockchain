import React, { Component } from "react"
import { Link } from "react-router-dom"

import _ from "./style"

class Navbar extends Component {
  render() {
    return (
      <div className={_.container}>
        <div className={_.logo}>
          <h1>
            Bed'N'Blockchain
          </h1>
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