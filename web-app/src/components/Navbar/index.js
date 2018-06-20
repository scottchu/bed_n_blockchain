import React from "react"
import { gt } from "ramda"

import Logo from "../Logo"
import Menu from "../../containers/Menu"
import SearchInput from "../../containers/SearchInput"

import { withStyle } from "../utils/classNames"
import style from "./style"

const Navbar = ({ classNames, style, signedIn, offsetY }) => {
  const scroll = gt(offsetY, 15)

  return (
    <div className={style.container}>
      <div className={classNames(
        style.inner,
        scroll && style.shadow)}>

        <div className={style.content}>
          {/* logo */}
          <div className={style.column}>
            <Logo src="/" />
          </div>

          {/* search bar */}
          <div className={classNames(style.column, style.flex)}>
            <SearchInput
              placeholder="Where do you want to go?" />
          </div>
          <div className={classNames(style.column, style.fixed)}>
            <Menu />
          </div>
        </div>
      </div>

    </div>
  )
}

export default withStyle(style)(Navbar)