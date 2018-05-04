import React from "react"
import { Redirect } from "react-router-dom"

import SignUpForm from "../../containers/SignUpForm"
import RedirectWhenSignedIn from "../../containers/RedirectWhenSignedIn"

const SignUpPage = () => {
  return (
    <div>
      <RedirectWhenSignedIn to="/" />
      <SignUpForm />
    </div>
  )
}

export default SignUpPage