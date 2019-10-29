// require npm packages
const express = require('express')
// require local files
const form = require('../../src/pages/Form')
// create router
const router = express.Router()

// Tell express how it should process the body of HTTP requests
router.use(express.urlencoded({ extended: true }))

// GET home page
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

// GET /table
router.get('/table', (req, res) => {
  form.getForm((err, formData) => {
    if (err) return res.status(500).send('file access error')
    res.set('Content-Type', 'image/svg+xml')
    res.render('table', formData)
  })
})

// GET /form
router.get('/form', (req, res) => {
// Show the form
  res.render('form')
})

// POST /form
router.post('/form', (req, res) => {
  const formObj = req.body
  console.log(req.body)
  form.saveForm(formObj, err => {
    if (err) return res.status(500).end()
    res.redirect('/table')
  })
})


module.exports = router
