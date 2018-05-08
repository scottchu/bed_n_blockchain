import { TYPE } from "../../actions/browser"

const initialState = {
  offsetY: 0,
  y: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.scrollStart: {
      return {
        scrolling: true,
        y: action.y
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