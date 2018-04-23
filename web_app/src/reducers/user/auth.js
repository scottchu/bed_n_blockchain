
import { TYPE } from "../../actions/user"

const initialState = {
  token: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.signInSuccessful:
    case TYPE.signUpSuccessful: {
      const { token } = action.auth
      return {
        token
      }
    }

    case TYPE.signOut: {
      return {
        token: null
      }
    }

    default:
      return state
  }
}

export default reducer