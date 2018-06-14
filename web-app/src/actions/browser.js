export const TYPE = {
  scrollStart: "BROWSER_SCROLL_START",
  scrollStop: "BROWSER_SCROLL_STOP",

  updateOffsetY: "BROWSER_UPDATE_OFFSET_Y",

  click: "BROWSER_CLICK"
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
