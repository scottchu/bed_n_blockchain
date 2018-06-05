import { TYPE } from "../../actions/listings"

const initialState = {
  properties: [],
  currentPage: 1,
  totalPages: 1,
  fetching: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.fetchStart: {
      return {...state,
        fetching: true
      }
    }
    case TYPE.fetchStop: {
      return {...state,
        fetching: false
      }
    }
    case TYPE.fetchComplete: {
      const {
        properties,
        currentPage,
        totalPages
      } = action.response

      return {
        properties,
        currentPage,
        totalPages,
        fetching: false
      }
    }
    case TYPE.fetchFail: {
      return {...state,
        fetching: false
      }
    }
    default: {
      return state
    }
  }
}

export default reducer