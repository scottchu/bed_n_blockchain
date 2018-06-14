import { from } from "rxjs"

const Contract = ({ eth }) => (jsonInterface, address, options) => {
  return new eth.Contract(jsonInterface, address, options)
}

export default Contract