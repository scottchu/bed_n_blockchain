import React from "react"
import { NavLink } from "react-router-dom"

import { withStyle } from "../../utils/classNames"
import style from "./style"

const GuesMenu = ({ style }) => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to={"/sign-up"}>
            Sign Up
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to={"/sign-in"}>
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default withStyle(style)(GuesMenu)