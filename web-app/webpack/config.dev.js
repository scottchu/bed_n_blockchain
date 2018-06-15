let path = require("./utils/path")
let webpack = require("webpack")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const config = {
  context: path.src(),
  entry: {
    app: ["babel-polyfill", "./index.js"]
  },
  output: {
    path: path.dist(),
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash].js",
    publicPath: "/"
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
        test: /\.css$/,
        include: [
          path.src(),
          path.nodeModules()
        ],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                camelCase: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => {
                  return [
                    require("autoprefixer"),
                    require("precss")
                  ]
                }
              }
            }
          ]
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        include: [path.assets("fonts"), path.nodeModules()],
        use: [
          { loader: "url-loader" }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        include: [path.assets("fonts"), path.nodeModules()],
        use: [
          { loader: "file-loader" }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      title: "Bed'N'Blockchain",
      template: path.src("index.html"),
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css"],
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