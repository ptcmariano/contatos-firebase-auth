module.exports = (app, io) => {
    io.on('connection', (client) => {
        client.on('send-server', (data) => {
            client.emit('send-client', data);
            client.broadcast.emit('send-client', data);
        });
    });
}