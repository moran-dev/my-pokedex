const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')


mongoose.connect('mongodb://localhost:27017/MoranDB', { useNewUrlParser: true });
const app = express();
app.use(express.json());

requireDir('./src');

app.use('/', require('./routes'));

app.listen(3000, () => { console.log('Rodando') });