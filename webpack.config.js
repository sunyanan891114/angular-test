const path = require('path');

const AntdScssThemePlugin = require('antd-scss-theme-plugin');


const isProduction = process.env.NODE_ENV === 'production';

const config = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          AntdScssThemePlugin.themify('less-loader'),
        ],
      },
    ],
  },
  plugins: [
    new AntdScssThemePlugin(path.join(__dirname, 'src', 'theme.scss')),
  ]
};


module.exports = config;
