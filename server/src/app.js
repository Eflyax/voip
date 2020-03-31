import https from 'https';
import { createConnection, getManager } from 'typeorm';
var WebSocketServer = require('ws').Server;
import fs from 'fs';

var wsPort = 5000;
var masterId;
var listeners = {};
var httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/voip.eflyax.cz/privkey.pem', 'utf8'),
  cert: fs.readFileSync('/etc/letsencrypt/live/voip.eflyax.cz/fullchain.pem', 'utf8')
}).listen(wsPort);

var wss = new WebSocketServer({ server: httpsServer });

var connectionId = 0;
wss.on('connection', function (ws) {
  console.log('Client connected');
  connectionId = 1;
  listeners[connectionId] = ws;

  ws.on('message', function (message) {
    listeners[connectionId].send(message, {
      binary: true
    }, function (err) {
      if (err) {
        console.log('Error: ', err);
      }
    });

  });
  //     console.log('Speaker connected');
  // } else {
  //     listeners[connectionId] = ws;
  //     isMaster = false;
  //     console.log('Listener connected');
  // }

  ws.on('close', function () {
    delete listeners[connectionId];
    console.log('Client disconnected');
    // }
  });
});
