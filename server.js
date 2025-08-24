// server.js
const express = require('express');
const path = require('path');
const app = express();

/* ... your routes, view engine, static, etc ... */

// Only listen in local dev
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Local on :${port}`));
}

module.exports = app;   // <-- export for serverless
