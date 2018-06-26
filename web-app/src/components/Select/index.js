import React from "react"

import { addIndex, map } from "ramda"

import { withStyle } from "../utils/classNames"
import style from "./style"

const Select = ({ className, classNames, label, options, ...props }) => {
  return (
    <div className={style.container}>
      <label className={style.label}>
        <span className={style.labelText}>
          {label}
        </span>

        <select {...props}
          className={classNames(style.select, className)} >
          {addIndex(map)((option, index) => {
            return (
              <option
                key={index}
                className={style.option}
                selected={option.selected}
                value={option.value}>
                {option.text}
              </option>
            )
          }, options)}
        </select>
      </label>
    </div>
  )
}

export default withStyle(style)(Select)

