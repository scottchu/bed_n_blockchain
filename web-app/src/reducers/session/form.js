import {
  compose,
  converge,
  equals,
  identity,
  length,
  lte,
  prop
} from "ramda"

import { TYPE as sessionTYPE } from "../../actions/session"
import { TYPE as userTYPE } from "../../actions/user"

const initialState = {
  email: {
    value: "",
    isValid: false
  },
  password: {
    value: "",
    isValid: false
  }
}

// ====================================
// Email validation
// - match standard email format
// ====================================
const EMAIL_FORMAT = /^.{1,}[@].{1,}\..{1,}$/
const validateEmail = (value) => EMAIL_FORMAT.test(value)

// ====================================
// Password validation:
// - minimum 6 characters
// ====================================
const validatePassword = compose(lte(6), length)

const validate = {
  email: validateEmail,
  password: validatePassword
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case sessionTYPE.clearForm: {
      return initialState
    }

    case sessionTYPE.updateForm: {
      const { field, value } = action
      const isValid = validate[field](value)

      return {...state,
        [field]: {
          value,
          isValid
        }
      }
    }

    case userTYPE.signInSuccessful:
    case userTYPE.signUpSuccessful: {
      return initialState
    }

    default:
      return state
  }
}

export default reducer