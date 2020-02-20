const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const history = require('connect-history-api-fallback')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(history())
app.use(express.static(path.join(__dirname, './public')))

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
})

module.exports = app
