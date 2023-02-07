const http = require('http');
const app = require('../app');
const { swaggerDocs } = require('../swagger/swagger');

const server = http.createServer(app);

server.listen(3500);
swaggerDocs(app, 3500);

server.on('listening', () => {
    console.log('Servidor Ok en puerto 3500');
})
