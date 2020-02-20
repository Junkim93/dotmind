const app = require('./app.js')
const server = require('http')
const socketServer = require('socket.io')
const config = require('./config.js')
const painting = require('./services/wsPainting.js')
const chat = require('./services/wsChat.js')
// import game from './services/wsGame.js'

const http = server.createServer(app)
const io = socketServer(http)
const options = config()

const handleListener = () => {
  console.log(`Listening on http://localhost:${options.PORT}`)
}

io.of('/multi-game').on('connection', socket => {
  painting(socket)
  chat(socket)
})

http.listen(options.PORT, () => handleListener())
