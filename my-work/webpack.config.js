const htmlPlugins = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
            entry: "./src/main.js",
            plugins: [
              new htmlPlugins({template: './travel.html'}),
              new copyPlugin({
                  patterns: [
                      {
                      from: './css', to: 'css'
                      }
                  ]
              })
            ],
            devServer: {
                historyApiFallback: true,
            },
            devtool: "eval-source-map"
};

