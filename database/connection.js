const mongoose =require('mongoose');

const connection = () => {
    mongoose.connect('mongodb://localhost:27017');
    console.log('database conected')
};


module.exports = connection;