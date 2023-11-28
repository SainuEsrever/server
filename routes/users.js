const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('users/index')
})

// New Product Route
router.get('/new', (req, res) => {
    res.render('users/new')
})
//Create Product Route
router.post('/new', (req, res) => {
    res.send('create')
})

module.exports = router