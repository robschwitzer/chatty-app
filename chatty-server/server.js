const express = require('express');
const { Server: SocketServer, OPEN } = require('ws');
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wsServer = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.s

wsServer.broadcast = function broadcast(data) {
const payload = JSON.stringify(data); //msg object
wsServer.clients.forEach(function each(client) {
  if (client.readyState === OPEN) {
    console.log('Sending to client')
    client.send(payload);
    }
  });
};

wsServer.on('connection', (socket) => {
  const clientId = uuidv4();
  const clientsConnected = wsServer.clients.size;

  console.log('Client connected', clientId);

  socket.on('message', function incoming(message) {
    const msgContent = JSON.parse(message);
    console.log('received: %s', JSON.stringify(msgContent));
    const msg = {
      id: uuidv4(),
      author: clientId,
      username: msgContent.username,
      content: msgContent.content,
      type: msgContent.type
    }
    wsServer.broadcast(msg);
  });

  wsServer.broadcast({type: 'connect', count: clientsConnected})

  socket.on('close', () => wsServer.broadcast({type: 'connect', count: wsServer.clients.size}));

})