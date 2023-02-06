const express = require('express');

const app = express();

//Config express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'))

app.get('/', (req, res) => {
    res.send('Todo Ok');
    console.log('Todo Ok');
});

module.exports = app;