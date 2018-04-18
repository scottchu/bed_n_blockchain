
import { TYPE } from "../../../actions/user/session"

const initialState = {
  sending: false
}

const userSessionStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.create: {
      return {
        sending: true
      }
    }

    default:
      return state
  }
}

export default userSessionStatusReducer