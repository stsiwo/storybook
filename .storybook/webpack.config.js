const path = require('path');
//const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
//module.exports = (baseConfig, env, config) => {
  //config.module.rules.push({
    //test: /\.(ts|tsx)$/,
    //loader: require.resolve('awesome-typescript-loader'),
  //});
  //console.log(config.module.rules);
  //config.plugins.push(new TSDocgenPlugin()); // optional
  //config.resolve.extensions.push('.ts', '.tsx');
  //return config;
//};
//

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      { test: /\.tsx?$/, 
        loader: "awesome-typescript-loader",
        include: path.resolve(__dirname, '../src'),
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  }

}
