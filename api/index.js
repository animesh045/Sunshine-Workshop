// api/index.js
const serverless = require('serverless-http');
const app = require('../server');   // path to your server.js

module.exports = (req, res) => {
  const handler = serverless(app);
  return handler(req, res);
};
