export const TYPE = {
  inputFocus: "SEARCH_INPUT_FOCUS",
  inputBlur: "SEARCH_INPUT_BLUR",
  inputUpdate: "SEARCH_INPUT_UPDATE",

  searchStart: "SEARCH_SEARCH_START",
  searchSuccessful: "SEARCH_SEARCH_SUCCESSFUL",
  searchFailed: "SEARCH_SEARCH_FAILED"

}

export const inputFocus = () => {
  return {
    type: TYPE.inputFocus
  }
}

export const inputBlur = () => {
  return {
    type: TYPE.inputBlur
  }
}

export const inputUpdate = (value) => {
  return {
    type: TYPE.inputUpdate,
    value
  }
}

export const search = () => {
  return {
    type: TYPE.searchStart
  }
}

export const searchSuccessful = (response) => {
  return {
    type: TYPE.searchSuccessful,
    response
  }
}

export const searchFailed = (errors) => {
  return {
    type: TYPE.searchFailed,
    errors
  }
}