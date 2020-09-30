const Websocket = require('ws');
const wsURL = "ws://localhost:8099";
const ws = new Websocket(wsURL);
const stream = Websocket.createWebSocketStream(ws);
stream.write('hello\n');
stream.pipe(process.stdout);
