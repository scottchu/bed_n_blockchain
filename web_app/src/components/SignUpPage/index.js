import React from "react"
import { Redirect } from "react-router-dom"

import SignUpForm from "../../containers/SignUpForm"
import AuthorizeRedirect from "../../containers/AuthorizeRedirect"

const SignUpPage = () => {
  return (
    <div>
      <AuthorizeRedirect
        whenSignedIn
        to="/" />
      <SignUpForm />
    </div>
  )
}

export default SignUpPage