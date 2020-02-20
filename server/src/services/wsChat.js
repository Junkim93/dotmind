const chat = socket => {
  socket.on('message', msgObj => {
    socket.broadcast.emit('newMessage', msgObj)
  })
}

module.exports = chat
