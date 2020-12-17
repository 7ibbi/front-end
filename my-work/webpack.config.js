const htmlPlugins = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
            entry: "./week-6/homework/src/main.js",
            plugins: [
              new htmlPlugins({template: './week-6/homework/travel.html'}),
              new copyPlugin({
                  patterns: [
                      {
                      from: 'week-6/homework/css', to: 'css'
                      }
                  ]
              })
            ],
            devServer: {
                historyApiFallback: true,
            },
            devtool: "eval-source-map"
};

