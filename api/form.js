const fs = require('fs')
const path = require('path')

module.exports = {
  getForm,
  saveForm
}

const filepath = path.join(__dirname, 'form.json')

function getForm (callback) {
  fs.readFile(filepath, 'utf8', (err, contents) => {
    if (err) return callback(err)
    const obj = JSON.parse(contents)
    callback(null, obj)
  })
}

function saveForm (form, callback) {
  const formString = JSON.stringify(form)
  fs.writeFile(filepath, formString, 'utf8', callback)
}