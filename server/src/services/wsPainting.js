const painting = socket => {
  socket.on('paintInfo', target => {
    socket.broadcast.emit('receivePaintInfo', target)
  })
}

module.exports = painting
