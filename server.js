const express = require('express');
const app = express();
const PORT = 3001;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const db = require('./models');
mongoose.connect("mongodb://localhost:27017/ttfm", () => {
    console.log('Connected to db');
});

// const router = require('./routes/router');
const userRouter = require('./controllers/user-controller');
// const projectRouter = require('./controllers/project-controller');
// const testRouter = require('./controllers/test-controller');
// app.use('/', router);
app.use('/', userRouter);
// app.use('/', projectRouter);
// app.use('/', testRouter);

app.listen(PORT, ()=> {
    console.log('Listening on', PORT);
});
