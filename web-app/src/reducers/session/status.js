
import { TYPE } from "../../actions/user"

const initialState = {
  sending: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.signIn:
    case TYPE.signUp: {
      return {
        sending: true
      }
    }

    case TYPE.signInSuccessful:
    case TYPE.signInFailed:
    case TYPE.signUpSuccessful:
    case TYPE.signUpFailed: {
      return {
        sending: false
      }
    }

    default:
      return state
  }
}

export default reducer