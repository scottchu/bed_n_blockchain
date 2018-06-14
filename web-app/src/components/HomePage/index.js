import React from "react"

import Listings from "../../containers/Listings"

import { withStyle } from "../../common/css"
import style from "./style"

const HomePage = ({ sytle }) => {
  return (
    <div className={style.container}>
      <Listings />
    </div>
  )
}

export default withStyle(style)(HomePage)