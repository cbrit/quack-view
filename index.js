const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Serve files under public directory, required for CSS to be effective
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

io.on('connection', function(socket) {
    console.log('User connected');

    socket.on('disconnect', function() {
        console.log('User disconnected')
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
})