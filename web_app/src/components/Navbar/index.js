import React from "react"
import { CommonMenu, GuestMenu, UserMenu } from "./menu"

import _ from "./style"

const Navbar = ({ signedIn }) => {
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
          <CommonMenu />
          { signedIn ?
            <UserMenu /> :
            <GuestMenu />
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar