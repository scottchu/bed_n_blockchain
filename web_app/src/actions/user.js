export const TYPE = {
  signUp: "USER_SIGN_UP",
  signUpSuccessful: "USER_SIGN_UP_SUCCESSFUL",
  signUpFailed: "USER_SIGN_UP_FAILED",

  signIn: "USER_SIGN_IN",
  signInSuccessful: "USER_SIGN_IN_SUCCESSFUL",
  signInFailed: "USER_SIGN_IN_FAILED",

  signOut: "USER_SIGN_OUT",

  setAuthToken: "USER_SET_AUTH_TOKEN",
  restoreAuthToken: "USER_RESTORE_AUTH_TOKEN",
  setAccount: "USER_SET_ACCOUNT"
}

export const signUp = () => {
  return {
    type: TYPE.signUp
  }
}

export const signUpSuccessful = ({ account, auth }) => {
  return {
    type: TYPE.signUpSuccessful,
    account,
    auth
  }
}

export const signUpFailed = (errors) => {
  return {
    type: TYPE.signUpFailed,
    errors
  }
}

export const signIn = () => {
  return {
    type: TYPE.signIn
  }
}

export const signInSuccessful = ({ account, auth }) => {
  return {
    type: TYPE.signInSuccessful,
    account,
    auth
  }
}

export const signInFailed = (errors) => {
  return {
    type: TYPE.signInFailed,
    errors
  }
}

export const signOut = () => {
  return {
    type: TYPE.signOut
  }
}

export const setAuthToken = (token) => {
  return {
    type: TYPE.setAuthToken,
    token
  }
}

export const restoreAuthToken = (token) => {
  return {
    type: TYPE.restoreAuthToken,
    token
  }
}

export const setAccount = (account) => {
  return {
    type: TYPE.setAccount,
    account
  }
}
