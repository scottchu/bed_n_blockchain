export const TYPE = {
  signUp: "USER_SIGN_UP",
  signUpSuccessful: "USER_SIGN_UP_SUCCESSFUL",
  signUpFailed: "USER_SIGN_UP_FAILED",

  signIn: "USER_SIGN_IN",
  signInSuccessful: "USER_SIGN_IN_SUCCESSFUL",
  signInFailed: "USER_SIGN_IN_FAILED",

  signOut: "USER_SIGN_OUT",

  setAuthToken: "USER_SET_AUTH_TOKEN",
  setProfile: "USER_SET_PROFILE"
}

export const signUp = () => {
  return {
    type: TYPE.signUp
  }
}

export const signUpSuccessful = ({ auth, profile }) => {
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

export const signInSuccessful = ({ auth, profile }) => {
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

export const setAuthToken = (token) => {
  return {
    type: TYPE.setAuthToken,
    token
  }
}

export const setProfile = (profile) => {
  return {
    type: TYPE.setProfile,
    profile
  }
}