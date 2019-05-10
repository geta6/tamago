const path = require('path');
const next = require('next');
const express = require('express');
const morgan = require('morgan');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(morgan('dev', { skip: (req) => /^\/_next/.test(req.path) }));
  server.use('/static/jquery', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
  server.use('/static/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));
  server.get('*', (req, res) => handle(req, res));
  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
  });
});
