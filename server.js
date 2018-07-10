const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");
//body parser needs to be at the top in order to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const mongoose = require('mongoose');
const db = require('./models');
mongoose.connect("mongodb://localhost:27017/ttfm")
    .then(() => {
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

const gamify = require('./middleware/gamify');
app.use(gamify.checkProgress({ option1: true, achievement1 : (user) => user.logins.length > 5 }));

app.listen(PORT, ()=> {
    console.log('Listening on', PORT);
});
