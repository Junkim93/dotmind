import express from 'express';
import socketIo from 'socket.io';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 서버 실행 관련
const PORT = 4000;

function handleListening() {
  console.log(`LISTENING ON: http://localhost:${PORT}`);
}

server.listen(PORT, handleListening);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '../../client/public/index.html')
})

// socket 로직
io.on('connection', (socket) => {
  socket.on('newMessage', data => {
    socket.broadcast.emit('message', data);
  })
});