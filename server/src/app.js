import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import history from 'connect-history-api-fallback'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(history())
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

export default app
