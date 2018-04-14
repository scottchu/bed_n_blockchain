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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.nodeModules()
        ],
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Bed'N'Blockchain",
      template: path.src("index.html"),
      filename: "./index.html"
    })
  ],
  resolve: {
    modules: ["node_modules"]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: [
      path.assets(),
      path.dist()
    ],
    hot: true,
    inline: true,
    port: 8080,
    progress: true
  }
}


module.exports = config