import React from "react"

import EmailInput from "../../containers/Session/EmailInput"
import PasswordInput from "../../containers/Session/PasswordInput"
import SubmitButton from "../../containers/Session/SubmitButton"

const SessionForm = ({ onSubmit, children }) => {
  return (
    <div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onSubmit(e)
        }}>
          <section>
            <EmailInput/>
          </section>

          <section>
            <PasswordInput />
          </section>

          <section>
            <SubmitButton />
          </section>
        </form>
      </div>
    </div>
  )
}

export default SessionForm