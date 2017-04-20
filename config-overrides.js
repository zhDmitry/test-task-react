const ExtractTextPlugin = require('extract-text-webpack-plugin');


function rewireLess (config, env) {
  config.module.loaders.find(urlLoader).exclude.push(/\.less$/);

  config.module.loaders.push({
    test: /\.less$/,
    loader: (env === 'development')
      ? 'style!css!less'
      : ExtractTextPlugin.extract('style', 'css!less')
  });

  return config;
}

const urlLoader = function (conf) {
  return conf.loader === 'url';
};


module.exports = function override(config, env) {
  //do stuff with the webpack config...
  rewireLess(config, env);
  console.log(config.module);
  return config;
}



