const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
};
