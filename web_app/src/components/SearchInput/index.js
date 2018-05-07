import React from "react"

import { withStyle } from "../../common/css"
import style from "./style"

const SearchInput = ({ placeholder, style }) => {
  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="search"
        placeholder={placeholder} />
    </div>
  )
}

export default withStyle(style)(SearchInput)