require("dotenv").config();
const mongoose =require('mongoose');
const db = process.env.DATABASE_URL;

const connection = () => {
    mongoose.connect(db);
    console.log('database conected')
};


module.exports = connection;