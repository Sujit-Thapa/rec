const http= require('http');

const server = http.createServer();

server.on('connection',(socket) => {
    console.log('new connection...');
});
server.listen(3000);

console.log('listening on port 3000...');

