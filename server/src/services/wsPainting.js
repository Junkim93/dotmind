const painting = socket => {
  socket.on('paintInfo', target => {
    socket.broadcast.emit('receivePaintInfo', target)
  })
}

export default painting
