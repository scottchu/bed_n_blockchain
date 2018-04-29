
import { TYPE } from "../../actions/user"

const initialState = {
  token: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.setAuthToken: {
      const { token } = action
      return {
        token
      }
    }

    default:
      return state
  }
}

export default reducer