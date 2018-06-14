import { from } from "rxjs"
import { pipe } from "ramda"

import { combine } from "../utils"

import Contract from "./Contract"
import subscribe from "./subscribe"

const getAccounts = ({ eth }) => () => {
  return from(eth.getAccounts())
}

export default combine({
  Contract,
  getAccounts,
  subscribe
})