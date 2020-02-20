import app from './app.js'
import server from 'http'
import socketServer from 'socket.io'
import config from './config.js'
import painting from './services/wsPainting.js'
import chat from './services/wsChat.js'
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
