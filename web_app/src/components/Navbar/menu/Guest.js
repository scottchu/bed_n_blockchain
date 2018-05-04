import React from "react"
import { NavLink } from "react-router-dom"

import style from "./style"

const GuestMenu = () => {
  return [
    <li key="guest-sign-up">
      <NavLink
        className={style.navlink}
        activeClassName={style.active}
        to="/sign-up">
        Sign Up
      </NavLink>
    </li>,
    <li key="guest-sign-in">
      <NavLink
        className={style.navlink}
        activeClassName={style.active}
        to="/sign-in">
        Sign In
      </NavLink>
    </li>
  ]
}

export default GuestMenu