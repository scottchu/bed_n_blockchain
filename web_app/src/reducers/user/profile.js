
import { TYPE } from "../../actions/user"

const initialState = {
  email: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.signInSuccessful:
    case TYPE.signUpSuccessful: {
      const { email } = action.profile
      return {
        email
      }
    }

    case TYPE.signOut: {
      return initialState
    }

    default:
      return state
  }
}

export default reducer