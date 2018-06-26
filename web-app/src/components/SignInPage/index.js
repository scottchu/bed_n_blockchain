import React from "react"
import { prop } from "ramda"

import SignInForm from "../../containers/SignInForm"
import AuthorizeRedirect from "../../containers/AuthorizeRedirect"

import { withStyle } from "../utils/classNames"
import style from "./style"

const SignInPage = ({ style }) => {
  return (
    <div className={style.container}>
      {/* redirect to root when signed in */}
      <AuthorizeRedirect
        to="/"
        when={prop("signedIn")} />

      <SignInForm />
    </div>
  )
}

export default withStyle(style)(SignInPage)