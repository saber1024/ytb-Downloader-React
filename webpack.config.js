const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const APP_DIR = path.resolve(__dirname, "./src/");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader", // 可以把css放在页面上
          },
          {
            loader: "css-loader", // 放在后面的先被解析
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: [".", "node_modules"],
  },
};
