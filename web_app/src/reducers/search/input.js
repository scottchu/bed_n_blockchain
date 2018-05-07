import { TYPE } from "../../actions/search"
import input from "./input"

const initialState = {
  focusing: false,
  value: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.inputFocus: {
      return {...state, focusing: true}
    }

    case TYPE.inputBlur: {
      return {...state, focusing: false}
    }

    case TYPE.inputUpdate: {
      return {...state, value: action.value}
    }

    default: {
      return state
    }
  }
}

export default reducer