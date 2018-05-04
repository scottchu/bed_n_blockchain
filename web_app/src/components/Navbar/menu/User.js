import React from "react"
import { NavLink } from "react-router-dom"

import style from "./style"

const UserMenu = () => {
  return [
    <li key="user-account">
      <NavLink
        className={style.navlink}
        activeClassName={style.active}
        to="/account">
        Account
      </NavLink>
    </li>,
    <li key="user-sign-out">
      <NavLink
        className={style.navlink}
        activeClassName={style.active}
        to="/sign-out">
        Sign Out
      </NavLink>
    </li>
  ]
}

export default UserMenu