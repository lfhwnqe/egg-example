'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.mongoose = {
    url: 'mongodb://127.0.0.1/blog',
    options: {},
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537952980528_5005';

  // add your config here
  config.middleware = [];

  config.security = { // 开发环境关闭
    csrf: {
      enable: false
    }
  }

  return config;
};

// exports.mongoose = {
//   url: 'mongodb://127.0.0.1/blog',
//   options: {},
// };