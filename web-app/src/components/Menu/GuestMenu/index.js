import React from "react"
import { NavLink } from "react-router-dom"

import { withStyle } from "../../../common/css"
import style from "./style"

const GuesMenu = ({ style }) => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to={{
              pathname: "/sign-up",
              state: {
                modal: true
              }
            }}>
            Sign Up
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to={{
              pathname: "/sign-in",
              state: {
                modal: true
              }
            }}>
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default withStyle(style)(GuesMenu)