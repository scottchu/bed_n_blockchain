import { anyPass } from "ramda"

import invalidForm from "./invalidForm"
import sendingStatus from "./sendingStatus"

const disable = anyPass([invalidForm, sendingStatus])

export default disable