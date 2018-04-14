let { join } = require("path")

let path = (...args) => {
  return join(__dirname, "..", ...args)
}

path.root = (...args) => {
  return path("../", ...args)
}

path.src = (...args) => {
  return path.root("src", ...args)
}

path.dist = (...args) => {
  return path.root("dist", ...args)
}

path.assets = (...args) => {
  return path.root("assets", ...args)
}

path.nodeModules = (...args) => {
  return path.root("node_modules", ...args)
}

module.exports = path