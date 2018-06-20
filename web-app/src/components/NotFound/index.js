import React from "react"
import PropTypes from "prop-types"

import { withStyle } from "../utils/classNames"
import style from "./style"

const NotFound = ({ title, message }) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.title}>
          {title}
        </h1>
      </div>
      <div className={style.body}>
        <p className={style.message}>
          {message}
        </p>
      </div>
    </div>
  )
}

NotFound.defaultProps = {
  title: "404 Not Found!",
  message: "We are unable to find this page."
}

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default withStyle(style)(NotFound)