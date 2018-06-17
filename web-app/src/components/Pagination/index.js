import React from "react"
import PropTypes from "prop-types"
import { equals, gt, map, range } from "ramda"

import { withStyle } from "../../common/css"
import style from "./style"

const visiblePages = (currentPage, totalPages) => {
  let currentIndex = 0

  const start = currentPage - 2
  const end = currentPage + 3
  const overflow = totalPages - end

  const n = start < 1 ?
    (1 - start) :
    overflow < 0 ?
    overflow + 1 :
    0

  return range(start + n, end + n)
}

const Pagination = ({ currentPage, style, totalPages, jump }) => {
  const pages = visiblePages(currentPage, totalPages)

  return (
    <div className={style.container}>
      <ul className={style.list}>

        <li
          className={style.item}>
          <button
            className={style.join(style.page, style.ifElse(equals(currentPage, 1), style.invisible))}
            onClick={() => jump(1)} >
            { "<" }
          </button>
        </li>

        {map((num) => {
          const active = equals(currentPage, num)
          const className = style.join(style.page, style.ifElse(active, style.active))
          return (
            <li
              className={style.item}
              key={num}>
              <button
                className={className}
                onClick={() => jump(num)}
                disabled={active}>
                {num}
              </button>
            </li>
          )
        }, pages)}

        <li
          className={style.item}>
          <button
            className={style.join(style.page, style.ifElse(equals(currentPage, totalPages), style.invisible))}
            onClick={() => jump(totalPages)} >
            { ">" }
          </button>
        </li>
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  jump: PropTypes.func.isRequired,
}

export default withStyle(style)(Pagination)