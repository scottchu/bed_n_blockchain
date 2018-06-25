import React, { Component } from "react"
import PropTypes from "prop-types"
import { equals, gt, gte, lte, map, not } from "ramda"

import { withStyle } from "../utils/classNames"
import style from "./style"

import { getSearchPage, locationSearch, visiblePages } from "./utils"

class Pagination extends Component {

  goto = (page) => () => this.props.goto(page)

  fetchPage = ({ load, location }) => {
    load(getSearchPage(location))
  }

  componentDidMount() {
    this.fetchPage(this.props)
  }

  componentWillUpdate(nextProps) {
    if (not(equals(locationSearch(this.props), locationSearch(nextProps))))
      this.fetchPage(nextProps)
  }

  render() {
    const { classNames, currentPage, style, totalPages } = this.props
    const pages = visiblePages(currentPage, totalPages)

    if (lte(totalPages, 1))
      return null

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
              onClick={this.goto(1)} >
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
                  onClick={this.goto(num)}
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
              onClick={this.goto(totalPages)} >
              { ">" }
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  load: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired
}

export default withStyle(style)(Pagination)