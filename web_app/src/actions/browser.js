export const TYPE = {
  scrollStart: "BROWSER_SCROLL_START",
  scrollStop: "BROWSER_SCROLL_STOP",

  click: "BROWSER_CLICK"
}

export const scrollStart = (y) => {
  return {
    type: TYPE.scrollStart,
    y
  }
}

export const scrollStop = () => {
  return {
    type: TYPE.scrollStop
  }
}
