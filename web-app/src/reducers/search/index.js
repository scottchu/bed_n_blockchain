import { TYPE } from "../../actions/search"
import input from "./input"

const initialState = {
  searching: false,
  input: {
    focusing: false,
    value: ""
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.inputFocus:
    case TYPE.inputBlur:
    case TYPE.inputUpdate: {
      return {...state, input: input(state.input, action)}
    }

    case TYPE.searchStart: {
      return {...state, searching: true}
    }

    case TYPE.searchSuccess: {
      return {...state, searching: false}
    }

    case TYPE.searchFailed: {
      return {...state, searching: false}
    }

    default: {
      return state
    }
  }
}

export default reducer