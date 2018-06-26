import React from "react"
import { prop } from "ramda"

import SignUpForm from "../../containers/SignUpForm"
import AuthorizeRedirect from "../../containers/AuthorizeRedirect"

import { withStyle } from "../utils/classNames"
import style from "./style"

const SignUpPage = ({ style }) => {
  return (
    <div className={style.container}>

      {/* redirect to root when signed in */}
      <AuthorizeRedirect
        when={prop("signedIn")}
        to="/" />

      <SignUpForm />
    </div>
  )
}

export default withStyle(style)(SignUpPage)