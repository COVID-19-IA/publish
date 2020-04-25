module.exports = {
  mode: "production",
  entry: {
    script: "./src/follow/script/main.ts",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/docs/follow",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};
