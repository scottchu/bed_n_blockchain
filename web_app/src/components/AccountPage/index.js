import React from "react"

import AuthorizeRedirect from "../../containers/AuthorizeRedirect"

const AccountPage = () => {
  return (
    <div>
      <AuthorizeRedirect
        whenNotSignedIn
        to="/" />
      Account
    </div>
  )
}

export default AccountPage
