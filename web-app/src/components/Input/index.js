import React from "react"
import PropTypes from "prop-types"

import { withStyle } from "../utils/classNames"
import style from "./style"

const Input = ({ style, label, classNames, ...props }) => {
  return (
    <div className={style.container}>
      <label className={style.label}>
        <span className={style.labelText}>
          {label}
        </span>

        <input
          className={style.input}
          {...props} />
      </label>
    </div>
  )
}

export default withStyle(style)(Input)