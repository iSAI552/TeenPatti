import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log(`What is a socket?`, socket)
    console.log(`Socket is active with id: ${socket.id}`)

    socket.on("game", (payload) => {
        console.log(`The payload is: ${message}`)
        io.emit("game", payload)
    })

  // ...
});

httpServer.listen(5000, () => {
    console.log(`Server listening on port 5000`);
});

export default app;