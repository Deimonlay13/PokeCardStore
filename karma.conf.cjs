const path = require("path");

module.exports = function(config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],

        files: [
            { pattern: "__tests__/**/*.test.ts", watched: false },
            { pattern: "__tests__/**/*.test.tsx", watched: false },
            { pattern: "src/**/*.spec.ts", watched: false },
            { pattern: "src/**/*.spec.tsx", watched: false },
            { pattern: "src/**/*.tsx", included: false, watched: false }
        ],

        preprocessors: {
            "__tests__/**/*.test.ts": ["webpack", "sourcemap"],
            "__tests__/**/*.test.tsx": ["webpack", "sourcemap"],
            "src/**/*.spec.ts": ["webpack", "sourcemap"],
            "src/**/*.spec.tsx": ["webpack", "sourcemap"],
            "src/**/*.tsx": ["webpack", "sourcemap"]
        },

        webpack: {
            mode: "development",
            devtool: "inline-source-map",
            resolve: {
                extensions: [".ts", ".tsx", ".js", ".jsx"],
            },
            module: {
                rules: [{
                        test: /\.[jt]sx?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    "@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }],
                                    "@babel/preset-typescript",
                                ],
                                plugins: ["babel-plugin-istanbul"],
                            },
                        },
                    },
                    {
                        test: /\.css$/i,
                        use: ["style-loader", "css-loader"],
                    },
                ],
            },
        },

        reporters: ["progress", "coverage"],

        coverageReporter: {
            dir: path.join(__dirname, "coverage"),
            reporters: [
                { type: "html", subdir: "html", includeAllSources: true },
                { type: "lcovonly", subdir: ".", file: "lcov.info" },
                { type: "text-summary" },
            ],
        },

        browsers: ["ChromeHeadless"],
        customLaunchers: {
            ChromeHeadlessCustom: {
                base: "ChromeHeadless",
                flags: ["--no-sandbox", "--disable-gpu"],
            },
        },

        singleRun: true,
        concurrency: Infinity,
    });
};