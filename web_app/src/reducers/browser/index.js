import { TYPE } from "../../actions/browser"

const initialState = {
  offsetY: 0,
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
    case TYPE.updateOffsetY: {
      return {...state,
        offsetY: action.offsetY
      }
    }
    default: {
      return state
    }
  }
}

export default reducer