const express = require('express');
const app = express();
const port = 4200;

app.get('/', (req, res) => res.send('Hello World! Dau Kien'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
