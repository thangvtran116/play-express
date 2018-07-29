const express = require('express');
const app     = express();

app.get('/', (req, res) => res.end('Index'));

app.listen(3000, () => console.log('Express is runiing'));
