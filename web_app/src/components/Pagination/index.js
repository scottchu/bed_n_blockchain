import React from "react"
import { equals, gt, map, range } from "ramda"

import { withStyle } from "../../common/css"
import style from "./style"

const visiblePages = (current, total) => {
  let currentIndex = 0

  const start = current - 2
  const end = current + 3
  const overflow = total - end

  const n = start < 1 ?
    (1 - start) :
    overflow < 0 ?
    overflow + 1 :
    0

  return range(start + n, end + n)
}

const Pagination = ({ current, style, total, jump }) => {
  const pages = visiblePages(current, total)

  return (
    <div className={style.container}>
      <ul className={style.list}>

        <li
          className={style.item}>
          <button
            className={style.join(style.page, style.ifElse(equals(current, 1), style.invisible))}
            onClick={() => jump(1)} >
            { "<" }
          </button>
        </li>

        {map((num) => {
          const active = equals(current, num)
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
            className={style.join(style.page, style.ifElse(equals(current, total), style.invisible))}
            onClick={() => jump(total)} >
            { ">" }
          </button>
        </li>
      </ul>
    </div>
  )
}

export default withStyle(style)(Pagination)