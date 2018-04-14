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
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.nodeModules()
        ],
        use: [
          { loader: "babel-loader" }
        ]
      },
      {
        test: /\.pcss$/,
        include: [
          path.src()
        ],
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              camelCase: true,
              localIdentName: "[name]__[local]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
                return [
                  require("precss"),
                  require("autoprefixer")
                ]
              }
            }
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
    extensions: ["*", ".js", ".jsx", ".pcss"],
    modules: [
      path.src(),
      path.nodeModules()
    ]
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
    progress: true,
    historyApiFallback: true
  }
}


module.exports = config