const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    target: 'http://192.168.0.140:5000/',
    secure: false
  }
];
module.exports = PROXY_CONFIG;
