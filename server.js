//dependencies
const express = require('express')

//configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//routes
app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about breads!')
})

//breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})
