import React from "react"

import EmailInput from "../../containers/Session/EmailInput"
import PasswordInput from "../../containers/Session/PasswordInput"
import SubmitButton from "../../containers/Session/SubmitButton"

import { withStyle } from "../utils/classNames"
import style from "./style"

const SessionForm = ({ onSubmit, style, title }) => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.header}>
          <h1>{title}</h1>
        </div>
        <div className={style.body}>
          <form onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onSubmit(e)
          }}>
            <section className={style.section}>
              <EmailInput/>
            </section>

            <section className={style.section}>
              <PasswordInput />
            </section>

            <section className={style.section}>
              <SubmitButton />
            </section>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withStyle(style)(SessionForm)