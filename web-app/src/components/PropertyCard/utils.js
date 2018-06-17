import { join, path, prop } from "ramda"

export const name = prop("name")
export const price = prop("price")
export const type = prop("type")

export const address = prop("address")
export const city = path(["address", "city"])
export const country = path(["address", "country"])

export const dot = join(" · ")
export const space = join(" ")