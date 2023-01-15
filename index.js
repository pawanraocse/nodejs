const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes/routes')

const app = express();

app.use('/api', routes);

const databaseString = process.env.DATABASE_URL;

mongoose.connect(databaseString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log("Successfully connected to the database");
})

app.use(express.json());
app.listen(3000, () => {
    console.log(`App is listening at ${3000}`);
})

