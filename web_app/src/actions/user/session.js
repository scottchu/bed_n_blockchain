export const TYPE = {
  form: {
    clear: "USER_SESSION_CLEAR_FORM",
    update: "USER_SESSION_UPDATE_FORM"
  },

  create: "USER_SESSION_CREATE",
  createSuccessful: "USER_SESSION_CREATE_SUCCESSFUL",
  createFailed: "USER_SESSION_CREATE_FAILED",

  destroy: "USER_SESSION_DESTROY"
}

export const formUpdate = () => {
  return {
    type: TYPE.form.clear
  }
}

export const updateForm = (field, value) => {
  return {
    type: TYPE.form.update,
    field,
    value
  }
}

export const create = () => {
  return {
    type: TYPE.create
  }
}

export const createSuccessful = ({ response }) => {
  const { auth, profile } = response

  return {
    type: TYPE.createSuccessful,
    auth,
    profile
  }
}

export const createFailed = (error) => {
  return {
    type: TYPE.createFailed,
    error
  }
}

export const destroy = () => {
  return {
    type: TYPE.destroy
  }
}