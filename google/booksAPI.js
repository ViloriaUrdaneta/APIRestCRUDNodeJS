require("dotenv").config();
const axios = require('axios');


const search = async (q) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}&key=${key}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

module.exports = { search };
