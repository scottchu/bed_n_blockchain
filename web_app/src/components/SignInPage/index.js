import React from "react"
import SignInForm from "../../containers/SignInForm"
import AuthorizeRedirect from "../../containers/AuthorizeRedirect"

const SignInPage = () => {
  return (
    <div>
      <AuthorizeRedirect
        whenSignedIn
        to="/" />

      <SignInForm />
    </div>
  )
}

export default SignInPage