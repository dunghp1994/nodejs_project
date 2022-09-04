const path = require('path');
const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
  extname : '.hbs'
}));

//HTPP
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


console.log()

app.get('/tin-tuc', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})