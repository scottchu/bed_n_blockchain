import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import { withStyle } from "../../../common/css"
import style from "./style"

class UserDropdownMenu extends Component {
  state = {
    active: false
  }

  toggle = () => {
    return this.setState(({ active }) => ({active: !active}))
  }

  render() {
    const { style } = this.props
    const { active } = this.state

    return (
      <div
        className={style.join(
          style.container,
          style.ifElse(active, style.active))}>

        <div>
          <a
            className={style.button}
            onClick={this.toggle}>
            Menu
          </a>
        </div>

        <div className={style.dropdown}>
          <ul className={style.list}>
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
                to="/profile">
                Profile
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