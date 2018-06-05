import React from "react"

import { withStyle } from "../../common/css"
import style from "./style"

const Property = ({ property, style }) => {
  return (
    <div className={style.container}>
      Property {property.id}
    </div>
  )
}

export default withStyle(style)(Property)