import React from "react"
import SignInForm from "../../containers/SignInForm"
import AuthorizeRedirect from "../../containers/AuthorizeRedirect"

import { withStyle } from "../../common/css"
import style from "./style"

const SignInPage = ({ style }) => {
  return (
    <div className={style.container}>
      <AuthorizeRedirect
        whenSignedIn
        to="/" />

      <SignInForm />
    </div>
  )
}

export default withStyle(style)(SignInPage)