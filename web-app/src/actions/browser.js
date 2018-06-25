export const TYPE = {
  scrollStart: "BROWSER_SCROLL_START",
  scrollStop: "BROWSER_SCROLL_STOP",

  updateOffsetY: "BROWSER_UPDATE_OFFSET_Y",

  scrollTo: "BROWSER_SCROLL_TO"
}

export const updateOffsetY = (offsetY) => {
  return {
    type: TYPE.updateOffsetY,
    offsetY
  }
}

export const scrollStart = () => {
  return {
    type: TYPE.scrollStart
  }
}

export const scrollStop = () => {
  return {
    type: TYPE.scrollStop
  }
}

export const scrollTo = (coordinate) => {
  return {
    type: TYPE.scrollTo,
    coordinate
  }
}
