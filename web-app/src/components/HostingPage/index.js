import React from "react"
import { NavLink, Route, Switch } from "react-router-dom"

import AuthorizeRedirect from "../../containers/AuthorizeRedirect"
import HostingHomePage from "../HostingHomePage"
import HostingNewPage from "../HostingNewPage"
import HostingsPagination from "../../containers/HostingsPagination"

import { withStyle } from "../utils/classNames"
import style from "./style"

const HostingPage = ({ sytle }) => {
  return (
    <div className={style.container}>
      {/* redirect when not signed in */}
      <AuthorizeRedirect
        when={({ signedIn }) => !signedIn}
        to="/" />

      <div className={style.header}>
        <ul className={style.menu}>
          <li>
            <NavLink
              className={style.button}
              activeClassName={style.active}
              exact
              to="/host">
              Manage My Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.button}
              activeClassName={style.active}
              to="/host/new">
              Host
            </NavLink>
          </li>
        </ul>

      </div>
      <div className={style.content}>
        <Switch>
          <Route
            exact path="/host"
            component={HostingHomePage}/>

          <Route
            path="/host/new"
            component={HostingNewPage}/>

        </Switch>
      </div>
    </div>
  )
}

export default withStyle(style)(HostingPage)