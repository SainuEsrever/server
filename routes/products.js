const express = require('express')
const router = express.Router()


// All Products Route
router.get('/', (req, res) => {
  res.render('products/index')
})

// New Product Route
router.get('/new', (req, res) => {
  res.render('products/new')
})
//Create Product Route
router.post('/new', (req, res) => {
    res.send('create')
})

module.exports = router