var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000, 
  //database = require('./api/config/database'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');
  boardRoutes = require('./routes/BoardRoutes'),
  //listRoutes = require('./api/routes/ListRoutes'),
  //cardRoutes = require('./api/routes/CardRoutes'),
  //boardDAO = require('./api/dao/BoardDAO');

//boardDAO.populate()
mongoose.connect('mongodb://localhost:27017/myboard', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})

//listRoutes(app)
boardRoutes(app)
//cardRoutes(app)

app.listen(port, () => {
  console.log('Express server listening on port ' + port)
})