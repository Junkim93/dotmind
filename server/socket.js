const socketController = socket => {
  socket.emit('userConnected', socket.id);

  socket.on('newMessage', data => {
    socket.broadcast.emit('message', data);
  });

  socket.on('newPixelData', data => {
    socket.broadcast.emit('paintPixel', data);
  });

  socket.on('eraseCanvasSign', () => {
    socket.broadcast.emit('eraseCanvas');
  });
};

module.exports = socketController;
