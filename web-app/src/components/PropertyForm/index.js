import React from "react"

import Input from "../Input"
import Select from "../Select"
import PasswordInput from "../../containers/Session/PasswordInput"
import SubmitButton from "../../containers/Session/SubmitButton"

import { withStyle } from "../utils/classNames"
import style from "./style"

const PropertyForm = ({ onSubmit, property, style }) => {
  property = { address: {} }
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.header}>
          <h1>Property</h1>
        </div>
        <div className={style.body}>
          <form onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onSubmit(e)
          }}>
            <section className={style.section}>
              <Input
                name="name"
                label="name"
                placeholder="Describe your place"
                type="text"
                value={property.name} />
            </section>

            <section className={style.section}>
              <Input
                name="capacity"
                label="capacity"
                placeholder="Max number of guest"
                type="number"
                value={property.capacity}
                min="1" />
            </section>

            <section className={style.section}>
              <Select
                className={style.select}
                name="type"
                label="type"
                value={property.type}
                options={[
                  { text: "Select the type of property" },
                  { text: "Condo", value: "condo" },
                  { text: "House", value: "house" },
                  { text: "Villa", value: "villa" },
                  { text: "Other", value: "other" }
                ]}/>
            </section>

            <section className={style.section}>
              <Input
                name="street1"
                label="street 1"
                placeholder="1 Street Unit 1"
                type="text"
                value={property.address.street1} />
            </section>

            <section className={style.section}>
              <Input
                name="street2"
                label="street 2"
                placeholder="(Optional)"
                type="text"
                value={property.address.street2} />
            </section>

            <section className={style.section}>
              <Input
                name="city"
                label="city"
                placeholder="City"
                type="text"
                value={property.address.city} />
            </section>

            <section className={style.section}>
              <Input
                name="state"
                label="state"
                placeholder="State/Province"
                type="text"
                value={property.address.state} />
            </section>

            <section className={style.section}>
              <Input
                name="country"
                label="country"
                placeholder="Country"
                type="text"
                value={property.address.country} />
            </section>

            <section className={style.section}>
              <Input
                name="postal_code"
                label="postal code"
                placeholder="Code"
                type="text"
                value={property.address.postal_code} />
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

export default withStyle(style)(PropertyForm)