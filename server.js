const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const _ = require('lodash');
const cardCtrl = require('./controllers/cards');

var app = express()
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pokemon');
//TODO check if moongoose is connected
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/cards',cardCtrl.getAllCards);
app.get('/api/cards/:id', cardCtrl.getCardByID);
app.post('/api/cards', cardCtrl.postCreateCard);
app.delete('/api/cards/:id', cardCtrl.deleteCardById);
app.patch('/api/cards/:id', cardCtrl.updateCardById);
app.listen(3000, () => {
  console.log('Started on port 3000');
});
