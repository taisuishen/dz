const path = require('path');
const glob = require('glob');

module.exports = {
  // 使用 glob 以匹配该目录下的所有 .js 文件
  entry: glob.sync('/usr/local/lib/python3.10/dist-packages/pywebio/html/js/*.js'),

  output: {
    filename: '[name].js', // 输出文件的名称，将保留原始文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
  },

  // 禁用源映射
  devtool: false,  // 不生成源映射文件

  module: {
    rules: [
      {
        test: /\.js$/, // 只处理 .js 文件
        exclude: /node_modules/, // 排除 node_modules
        use: {
          loader: 'babel-loader', // 如果需要，使用 babel-loader 进行转译
          options: {
            presets: ['@babel/preset-env'],  // 使用 Babel 的环境预设
          },
        },
      },
    ],
  },

  // 配置模式为生产环境（优化构建）
  mode: 'production', // 或者 'development'，具体取决于你的需求
};
