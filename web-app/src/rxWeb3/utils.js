import { is, map, not } from "ramda"

const inject = (web3) => (fn) => fn(web3)

export const combine = (apis) => (web3) => {
  if (not(is(Object, apis)))
    throw "RxWeb3 combine: Invalid APIs"

  return map(inject(web3), apis)
}