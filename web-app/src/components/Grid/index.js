import React from "react"
import PropTypes from "prop-types"

import { map } from "ramda"

import { withStyle } from "../../common/css"
import style from "./style"

const Grid = ({ items, render, style }) => {
  return (
    <div className={style.container}>
      <div className={style.grid}>
        {map(render, items)}
      </div>
    </div>
  )
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  render: PropTypes.func.isRequired
}

export default withStyle(style)(Grid)