const express = require('express');
const app = express();
const cors = require('cors');


//Config express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors config
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    allowedHeaders: 'Content-Type,Authorization'
}

app.use(cors(corsOptions))



app.use(require('./routes'))


app.get('/', (req, res) => {
    res.send('All Ok');
    console.log('All Ok');
});

module.exports = app;