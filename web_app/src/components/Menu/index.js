import React from "react"

import GuestMenu from "./GuestMenu"
import UserMenu from "./UserMenu"

import { withStyle } from "../../common/css"
import style from "./style"

const Menu = ({ signedIn, style }) => {
  return (
    <div className={style.container}>
      {signedIn ? <UserMenu/> : <GuestMenu/>}
    </div>
  )
}

export default withStyle(style)(Menu)