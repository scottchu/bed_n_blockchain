export const TYPE = {
  signUp: "USER_SIGN_UP",
  signUpSuccessful: "USER_SIGN_UP_SUCCESSFUL",
  signUpFailed: "USER_SIGN_UP_FAILED",

  signIn: "USER_SIGN_IN",
  signInSuccessful: "USER_SIGN_IN_SUCCESSFUL",
  signInFailed: "USER_SIGN_IN_FAILED",

  signOut: "USER_SIGN_OUT"
}

export const signUp = () => {
  return {
    type: TYPE.signUp
  }
}

export const signUpSuccessful = ({ response }) => {
  const { auth, profile } = response

  return {
    type: TYPE.signUpSuccessful,
    auth,
    profile
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

export const signInSuccessful = ({ response }) => {
  const { auth, profile } = response

  return {
    type: TYPE.signInSuccessful,
    auth,
    profile
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