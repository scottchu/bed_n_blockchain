export const TYPE = {
  fetchStart: "HOSTINGS_FETCH_START",
  fetchStop: "HOSTINGS_FETCH_STOP",
  fetchComplete: "HOSTINGS_FETCH_COMPLETE",
  fetchFail: "HOSTINGS_FETCH_FAIL"
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