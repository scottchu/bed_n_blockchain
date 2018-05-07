import React from "react"
import Menu from "../../containers/Menu"

import { withStyle } from "../../common/css"
import style from "./style"

const Navbar = ({ style, signedIn }) => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.left}>

        </div>
        <div className={style.right}>
          <Menu />
        </div>
      </div>

    </div>
  )
}

export default withStyle(style)(Navbar)