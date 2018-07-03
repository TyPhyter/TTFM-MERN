const express = require('express');
const app = express();
const PORT = 3001;

const mongoose = require('mongoose');
const db = require('./models');
mongoose.connect("mongodb://localhost/ttfm", () => {
    console.log('Connected to db');
});


app.listen(PORT, ()=> {
    console.log('Listening on', PORT);
});
