export const TYPE = {
  fetchStart: "LISTINGS_FETCH_START",
  fetchStop: "LISTINGS_FETCH_STOP",
  fetchComplete: "LISTINGS_FETCH_COMPLETE",
  fetchFail: "LISTINGS_FETCH_FAIL",
  bookProperty: "LISTINGS_BOOK_PROPERTY"
}

export const fetchStart = (data = {}) => {
  return {
    type: TYPE.fetchStart,
    data
  }
}

export const fetchStop = () => {
  return {
    type: TYPE.fetchStop
  }
}

export const fetchComplete = (response) => {
  return {
    type: TYPE.fetchComplete,
    response
  }
}

export const fetchFail = (error) => {
  return {
    type: TYPE.fetchFail,
    error
  }
}

export const bookProperty = (id) => {
  return {
    type: TYPE.bookProperty,
    id
  }
}