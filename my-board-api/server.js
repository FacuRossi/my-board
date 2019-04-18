var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000, 
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');
  boardRoutes = require('./api/routes/BoardRoutes'),

mongoose.connect('mongodb://localhost:27017/myboard', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})

boardRoutes(app)

app.listen(port, () => {
  console.log('Express server listening on port ' + port)
})