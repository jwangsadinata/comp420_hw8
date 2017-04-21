var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
var db

app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), function() {
  console.log('I am listening on port ' + app.get('port'));
})

app.get('/', (req, res) => {
  res.send("Time to practice MongoDB")
})