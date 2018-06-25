export const TYPE = {
  location: {
    push: "HISTORY_LOCATION_PUSH",
    pushed: "HISTORY_LOCATION_PUSHED",
    pop: "HISTORY_LOCATION_POP",
    popped: "HISTORY_LOCATION_POPPED",
    replace: "HISTORY_LOCATION_REPLACE",
    replaced: "HISTORY_LOCATION_REPLACED"
  }
}

export const locationPush = (location) => {
  return {
    type: TYPE.location.push,
    location
  }
}

export const locationPushed = ({ location }) => {
  return {
    type: TYPE.location.pushed,
    location
  }
}

export const locationPop = (location) => {
  return {
    type: TYPE.location.pop,
    location
  }
}

export const locationPopped = ({ location }) => {
  return {
    type: TYPE.location.popped,
    location
  }
}

export const locationReplace = (location) => {
  return {
    type: TYPE.location.replace,
    location
  }
}

export const locationReplaced = ({ location }) => {
  return {
    type: TYPE.location.replaced,
    location
  }
}

