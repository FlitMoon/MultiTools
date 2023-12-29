const express = require('express');
const path = require('path');
const app = express();

const testRouter = require('./router/test');

// app.use(testRouter);

app.use(express.static(path.join(__dirname, 'multitools/build')));

app.listen(3002);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'))
})