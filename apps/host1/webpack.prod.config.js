const devConfig = require('./webpack.config');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

module.exports = merge(devConfig, {
  mode: 'production',
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        remote1: 'remote1@http://production/remoteEntry.js',
      },
    }),
  ],
});
