import React from "react"
import { Redirect } from "react-router-dom"

import SignInForm from "../../containers/SignInForm"
import RedirectWhenSignedIn from "../../containers/RedirectWhenSignedIn"

const SignInPage = () => {
  return (
    <div>
      <RedirectWhenSignedIn to="/" />
      <SignInForm />
    </div>
  )
}

export default SignInPage