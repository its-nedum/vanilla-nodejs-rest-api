const mongoose = require('mongoose');

const connectionString = "mongodb://localhost:27017/zuritest";

const db =  mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true })
            .then(() => console.log('Database connected successfully!'))
            .catch((error) => console.log('Connection error: ', error));

module.exports = db;