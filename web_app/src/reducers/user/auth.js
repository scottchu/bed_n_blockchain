import { TYPE } from "../../actions/user"

const initialState = {
  token: null,
  signedIn: false
}

const reducer = (state = initialState, { type, token }) => {
  switch (type) {
    case TYPE.loadAuthToken:
    case TYPE.setAuthToken: {
      const signedIn = token != null
      return { token, signedIn }
    }

    default:
      return state
  }
}

export default reducer