const path = require("path");

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    files: ["__tests__/**/*.ts", "__tests__/**/*.tsx"],
    preprocessors: {
      "__tests__/**/*.ts": ["webpack"],
      "__tests__/**/*.tsx": ["webpack"],
    },
    webpack: {
      mode: "development",
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            use: {
              loader: "ts-loader",
              options: { configFile: "tsconfig.karma.json" },
            },
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    },
    reporters: ["progress"],
    browsers: ["Chrome"],
    singleRun: false,
  });
};
