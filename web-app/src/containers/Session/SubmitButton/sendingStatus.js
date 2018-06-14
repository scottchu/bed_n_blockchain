import { pathOr } from "ramda"

const sendingStatus = pathOr(false, ["status", "sending"])

export default sendingStatus