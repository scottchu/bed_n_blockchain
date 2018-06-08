export const TYPE = {
  scrollStart: "BROWSER_SCROLL_START",
  scrollStop: "BROWSER_SCROLL_STOP",

  click: "BROWSER_CLICK"
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
