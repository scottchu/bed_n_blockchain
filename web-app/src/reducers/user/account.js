import { pickAll } from "ramda"

import { TYPE } from "../../actions/user"

const initialState = null

const cast = pickAll(["email", "inserted_at"])

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.setAccount: {
      return cast(action.account)
    }

    default:
      return state
  }
}

export default reducer