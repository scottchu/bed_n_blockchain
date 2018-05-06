import React from "react"
import Menu from "../../containers/Menu"

import { withStyle } from "../../common/css"
import style from "./style"

const Navbar = ({ style, signedIn }) => {
  return (
    <div className={style.container}>
      <Menu />
    </div>
  )
}

export default withStyle(style)(Navbar)