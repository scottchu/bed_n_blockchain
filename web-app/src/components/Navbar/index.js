import React from "react"
import { gt } from "ramda"

import Logo from "../Logo"
import Menu from "../../containers/Menu"
import SearchInput from "../../containers/SearchInput"

import { withStyle } from "../../common/css"
import style from "./style"

const Navbar = ({ style, signedIn, offsetY }) => {
  const scroll = gt(offsetY, 15)

  return (
    <div className={style.container}>
      <div className={style.join(style.inner, style.ifElse(scroll, style.shadow))}>
        <div className={style.content}>
          {/* logo */}
          <div className={style.column}>
            <Logo src="/" />
          </div>

          {/* search bar */}
          <div className={style.join(style.column, style.flex)}>
            <SearchInput
              placeholder="Where do you want to go?" />
          </div>
          <div className={style.join(style.column, style.fixed)}>
            <Menu />
          </div>
        </div>
      </div>

    </div>
  )
}

export default withStyle(style)(Navbar)