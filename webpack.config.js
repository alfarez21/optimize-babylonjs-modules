var path = require('path');

module.exports = {
    resolve: {
      extensions: [".ts", ".js"],
    },
    entry: './src/viewer.ts',
    output: {
      filename: 'babylonjs-optimized.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
      ],
    },
    mode: "production"
  };