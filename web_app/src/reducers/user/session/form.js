import {
  compose,
  converge,
  equals,
  identity,
  length,
  lte,
  prop
} from "ramda"

import { TYPE } from "../../../actions/user/session"

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

const userSessionFormReducer = (state = initialState, action) => {
  switch (action.type) {

    case TYPE.form.clear: {
      return initialState
    }

    case TYPE.form.update: {
      const { field, value } = action
      const isValid = validate[field](value)

      return {...state,
        [field]: {
          value,
          isValid
        }
      }
    }

    default:
      return state
  }
}

export default userSessionFormReducer