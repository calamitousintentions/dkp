
const path = require('path');
const express = require('express');
const socketio = require('socket.io')

const server = express()
  .use((req, res) => res.sendFile(path.join(__dirname, 'view/index.html')))
  .listen(process.env.WEBPORT, () => console.log(`[+] listening on ${process.env.WEBPORT}`));

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});
