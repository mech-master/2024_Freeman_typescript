module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: { filename: "bundle.js"},
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
            { test: /\.css/, use: ["style-loader", "css-loader"]}
        ]
    },
    devServer: {
        static: "./assets",
        port: 3000
    }
}