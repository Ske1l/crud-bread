const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//index
breads.get('/', (req, res) => {
    res.render('index',
        {
            breads: Bread
        }
    )
    //res.send('Bread')
})

module.exports = breads

//show
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
        })
    } else {
        res.send('404')
    }
})