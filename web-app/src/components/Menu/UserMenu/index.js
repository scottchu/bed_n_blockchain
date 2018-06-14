import React from "react"
import { NavLink } from "react-router-dom"

import UserDropdownMenu from "../../../containers/Menu/UserDropdownMenu"

import { withStyle } from "../../../common/css"
import style from "./style"

const UserMenu = ({ style }) => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li className={style.item}>
          <UserDropdownMenu />
        </li>
      </ul>
    </div>
  )
}

export default withStyle(style)(UserMenu)