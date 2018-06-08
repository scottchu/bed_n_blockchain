import { TYPE } from "../../actions/browser"

const initialState = {
  scrolling: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.scrollStart: {
      return {...state,
        scrolling: true
      }
    }

    case TYPE.scrollStop: {
      return {...state,
        scrolling: false
      }
    }
    default: {
      return state
    }
  }
}

export default reducer