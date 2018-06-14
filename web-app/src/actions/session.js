export const TYPE = {
  clearForm: "SESSION_CLEAR_FORM",
  updateForm: "SESSION_UPDATE_FORM"
}

export const formUpdate = () => {
  return {
    type: TYPE.clearForm
  }
}

export const updateForm = (field, value) => {
  return {
    type: TYPE.updateForm,
    field,
    value
  }
}
