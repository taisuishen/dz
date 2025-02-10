const path = require('path');
const glob = require('glob');

module.exports = {
  // 匹配 pywebio 目录下所有的 .js 文件
  entry: glob.sync('/usr/local/lib/python3.10/dist-packages/pywebio/html/js/**/*.js'),
  output: {
    // 输出文件的目录和文件名
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',  // 启用生成源映射
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'  // 使用 Babel 进行转译（如果需要）
      }
    ]
  }
};
