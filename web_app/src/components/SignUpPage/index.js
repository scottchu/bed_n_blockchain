import React from "react"
import { Redirect } from "react-router-dom"

import SignUpForm from "../../containers/SignUpForm"
import AuthorizeRedirect from "../../containers/AuthorizeRedirect"

import { withStyle } from "../../common/css"
import style from "./style"


const SignUpPage = ({ style }) => {
  return (
    <div className={style.container}>
      <AuthorizeRedirect
        whenSignedIn
        to="/" />

      <SignUpForm />
    </div>
  )
}

export default withStyle(style)(SignUpPage)