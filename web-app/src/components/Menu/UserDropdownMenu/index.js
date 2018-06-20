import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import { Subject } from "rxjs"
import { distinctUntilChanged, filter, startWith, tap } from "rxjs/operators"
import { equals, isNil } from "ramda"

import { withStyle } from "../../utils/classNames"
import style from "./style"

class UserDropdownMenu extends Component {

  scrolling$ = new Subject()

  switchOffOnScroll = () => {
    return this.scrolling$
      .pipe(
        distinctUntilChanged(),
        filter(equals(false)),
        tap(this.turn)
      )
      .subscribe()
  }

  state = {
    active: false
  }

  switch = () => {
    return this.turn(!this.state.active)
  }

  turn = (active) => {
    return this.setState((state) => ({...state, active}))
  }

  componentWillUpdate({ scrolling }) {
    this.scrolling$.next(scrolling)
  }

  componentDidMount() {
    this.switchOffOnScroll()
  }

  render() {
    const { style, classNames } = this.props
    const { active } = this.state

    return (
      <div
        className={classNames(
          style.container,
          active && style.active
        )}>

        <div>
          <a
            className={style.button}
            onClick={this.switch}>
            Menu
          </a>
        </div>

        <div className={style.dropdown}>
          <ul className={style.list}>
            <li className={style.item}>
              <NavLink
                className={style.link}
                activeClassName={style.active}
                to="/">
                Home
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink
                className={style.link}
                activeClassName={style.active}
                to="/account">
                Account
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink
                className={style.link}
                activeClassName={style.active}
                to="/host">
                Host
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink
                className={style.link}
                activeClassName={style.active}
                to="/sign-out">
                Sign Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withStyle(style)(UserDropdownMenu)