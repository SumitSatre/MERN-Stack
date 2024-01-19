const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');  // Updated import for socket.io
const app = express();
const server = http.createServer(app);  // Create an HTTP server instance

const io = socketIO(server);  // Attach socket.io to the server

app.get('/', (req, res) => {
    var options = {
        root: path.join(__dirname)
    }
    var filename = 'index.html';
    res.sendFile(filename, options);
});

var users = 0;

io.on('connection', (socket) => {
    console.log('A user connected');

    // setTimeout(()=>{
    //     socket.send("hi frontend");
    // } , 3000);

    // socket.emit("mucustomevent" , {Data : "My name is Sumit"});

    users++;
    io.sockets.emit("broadcast", { message: users + " users connected" })

    // socket.on("mucustomevent", (data) => {
    //     console.log(data.Data);
    // })

    socket.on('disconnect', () => {
        console.log('User disconnected');

        users--;
        io.sockets.emit("broadcast", { message: users + " users connected" })
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}/`);
});
