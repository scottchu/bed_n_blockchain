import React from "react"

import AuthorizeRedirect from "../../containers/AuthorizeRedirect"

const AccountPage = () => {
  return (
    <div>
      <AuthorizeRedirect
        when={({ signedIn}) => !signedIn}
        to="/" />
      Account
    </div>
  )
}

export default AccountPage
