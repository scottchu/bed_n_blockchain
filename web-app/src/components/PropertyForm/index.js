import React from "react"

import { withStyle } from "../utils/classNames"
import style from "./style"

const PropertyForm = ({ style }) => {
  return (
    <div className={style.container}>
      PropertyForm
    </div>
  )
}

export default withStyle(style)(PropertyForm)