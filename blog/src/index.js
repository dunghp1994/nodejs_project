const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const app = express()
const bodyParser = require('body-parser');
const port = 3000

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(bodyParser.json())

//static path
app.use(express.static(path.join(__dirname, 'public')));

//add midleware
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

// HTTP Logger
// app.use(morgan('combined')) 

//Template engine
app.engine('hbs', engine({
  extname : '.hbs'
}));

//HTPP
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));


//route init (khoi tao)
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


