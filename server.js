'use strict';

const express = require('express');

// Constants
const PORT = 8736;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.json({ username: 'Flavio' });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
