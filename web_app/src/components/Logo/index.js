import React from "react"
import { Link } from "react-router-dom"

import { withStyle } from "../../common/css"
import style from "./style"

const Logo = ({ style, src }) => {
  return (
    <div className={style.container}>
      <Link to={src}>
        <div className={style.logo}>
          <span className={style.char}>
            B
          </span>
          <span className={style.sym}>
            &
          </span>
          <span className={style.char}>
            B
          </span>
        </div>
      </Link>
    </div>
  )
}

export default withStyle(style)(Logo)