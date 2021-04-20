const mongoose = require('mongoose');

const connectionString = "mongodb://localhost:27017/mydb";

const db =  mongoose.connect(connectionString, 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true, 
        useFindAndModify: false 
    }
    )
    .then(() => console.log('Database connected successfully!'))
    .catch((error) => console.log('Connection error: ', error));

module.exports = db;