let path = require("./utils/path")
let webpack = require("webpack")

const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
  context: path.src(),
  entry: {
    app: ["./index.js"]
  },
  output: {
    path: path.dist(),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Bed'N'Blockchain",
      template: path.src("index.html"),
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: [
      path.assets(),
      path.dist()
    ],
    stats: "errors-only",
    port: 9000,
    progress: true
  }
}


module.exports = config