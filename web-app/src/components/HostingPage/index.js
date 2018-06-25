import React from "react"

import AuthorizeRedirect from "../../containers/AuthorizeRedirect"
import Hostings from "../../containers/Hostings"
import HostingsPagination from "../../containers/HostingsPagination"

import { withStyle } from "../utils/classNames"
import style from "./style"

const HostingPage = ({ sytle }) => {
  return (
    <div className={style.container}>
      <AuthorizeRedirect
        when={({ signedIn }) => !signedIn}
        to="/" />

      <div className={style.body}>
        <Hostings />
      </div>
      <div className={style.footer}>
        <HostingsPagination />
      </div>
    </div>
  )
}

export default withStyle(style)(HostingPage)