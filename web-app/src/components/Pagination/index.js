import React from "react"
import PropTypes from "prop-types"
import { equals, gt, map, range } from "ramda"

import { withStyle } from "../utils/classNames"
import style from "./style"

import { visiblePages } from "./utils"

const Pagination = ({ classNames, currentPage, style, totalPages, jump }) => {
  const pages = visiblePages(currentPage, totalPages)

  return (
    <div className={style.container}>
      <ul className={style.list}>

        <li
          className={style.item}>
          <button
            className={classNames(
              style.page,
              equals(currentPage, 1) && style.invisible
            )}
            onClick={() => jump(1)} >
            { "<" }
          </button>
        </li>

        {map((num) => {
          const active = equals(currentPage, num)
          return (
            <li
              className={style.item}
              key={num}>
              <button
                className={classNames(
                  style.page,
                  active && style.active
                )}
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
            className={classNames(
              style.page,
              equals(currentPage, totalPages) && style.invisible
            )}
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