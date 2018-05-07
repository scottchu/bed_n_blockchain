import React from "react"

import Menu from "../../containers/Menu"
import SearchInput from "../../containers/SearchInput"

import { withStyle } from "../../common/css"
import style from "./style"

const Navbar = ({ style, signedIn }) => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.join(style.column, style.flex)}>
          <SearchInput
            placeholder="Where do you want to go?" />
        </div>
        <div className={style.join(style.column, style.fixed)}>
          <Menu />
        </div>
      </div>

    </div>
  )
}

export default withStyle(style)(Navbar)