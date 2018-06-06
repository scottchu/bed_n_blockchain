import { TYPE } from "../../actions/user"

const initialState = {
  token: null,
  signedIn: false
}

const reducer = (state = initialState, { type, token }) => {
  switch (type) {
    case TYPE.setAuthToken:
    case TYPE.restoreAuthToken: {
      return {
        token,
        signedIn: (token != null)
      }
    }

    default:
      return state
  }
}

export default reducer