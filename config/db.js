const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongodb.uri);

mongoose.connection.on('error', (err) => {
    console.log("Erro: ", err);
});

mongoose.connection.on('connected', () => {
    console.log("Successfully connected to the database");    
});

mongoose.connection.on('disconnected', () => {
    console.log("Disconnected to the database");
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log("Database connection closed");
        process.exit(0);
    });
});

module.exports = mongoose;
