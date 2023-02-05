const http = require('http');
const app = require('../app');

const server = http.createServer(app);

server.listen(3007);

server.on('listening', () => {
    console.log('Servidor Ok en puerto 3007');
})
