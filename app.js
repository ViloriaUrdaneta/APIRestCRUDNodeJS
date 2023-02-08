const express = require('express');
const app = express();

//Config express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(require('./routes'))

app.get('/', (req, res) => {
    res.send('All Ok');
    console.log('All Ok');
});

module.exports = app;