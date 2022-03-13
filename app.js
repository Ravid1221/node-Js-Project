const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const userSystem = require('./routes/userSytem');
const bizSystem = require('./routes/bizSystem');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/my_project')
    .then(()=> console.log({msg:"Connect to db"}))
    .catch(err=> console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/user", userSystem);
app.use("/card", bizSystem);

module.exports = app;
