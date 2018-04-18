import React from "react"
import PropTypes from "prop-types"

import _ from "./style"

const Input = ({ label, ...props }) => {
  return (
    <div className={_.container}>
      <label>
        {label}
        <input {...props} />
      </label>
    </div>
  )
}

export default Input