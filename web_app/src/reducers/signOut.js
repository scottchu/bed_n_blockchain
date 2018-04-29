import { compose, equals, prop } from "ramda"

import { TYPE } from "../actions/user"

const isSignOut = compose(
  equals(TYPE.signOut),
  prop("type")
)

const signOut = (reducer) => (state, action) => {
  return reducer((isSignOut(action) ? undefined : state), action)
}

export default signOut