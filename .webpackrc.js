const path = require('path');
export default {
  entry: 'src/index.js',
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    "@":path.resolve(__dirname, 'src')
  },
  disableDynamicImport: true,
  publicPath:"/dist/",
  hash: true,
  outputPath:'./dist',
  extraBabelPlugins: [
    ["import", { "libraryName": "antd-mobile", "style": true }]
  ],
  browserslist:["> 1%","last 7 versions"],
  env:{
    "development":{
      publicPath: '/',
    }
  },
  theme: {
    "@primary-color": "#1DA57A"
  },
}