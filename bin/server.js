const http = require('http');
const app = require('../app');
const { swaggerDocs } = require('../swagger/swagger');
const port = process.env.PORT || 3500;
const connection = require('../database/connection')


const server = http.createServer(app);

connection();
server.listen(port);
swaggerDocs(app, port);

server.on('listening', () => {
    console.log(`Server listening to ${port}`);
})
