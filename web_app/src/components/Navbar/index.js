import React, { Component } from "react"

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
            <li>Sign Up / Sign In</li>
            <li>Post a Room</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar