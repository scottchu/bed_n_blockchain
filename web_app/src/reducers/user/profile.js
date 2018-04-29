import { pickAll } from "ramda"

import { TYPE } from "../../actions/user"

const initialState = {
  email: null
}

const cast = pickAll(["email"])

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.setProfile: {
      return cast(action.profile)
    }

    default:
      return state
  }
}

export default reducer