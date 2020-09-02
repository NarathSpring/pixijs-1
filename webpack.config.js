const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动添加html文件
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  devServer: {
    //本地服务
    port: 3031,
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader", //支持es6语法
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-class-properties", //支持class属性
              "@babel/plugin-transform-runtime" //支持async await
            ]
          }
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html") //html模板
    }),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: "public/assets", to: "dist/assets" }]
    // })
  ]
};
