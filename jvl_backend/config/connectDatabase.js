require('dotenv').config();
const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect(`mongodb://localhost:27017/mini-ecommerce`)
    .then((con) => {
        console.log('Mongo DB Connected To Host:' + con.connection.host);
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
};

module.exports = connectDatabase;