import { Server } from "socket.io";
import http from "http";
import express from "express";

const App = express();

const server = http.createServer(App);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

export const  getRecieverSocketId = (recieverId) => {
    return userSocketMap[recieverId];
}

const userSocketMap = {};

io.on("connection", (socket) => {
console.log("User connected", socket.id);

const userId = socket.handshake.query.userId;
if(userId != undefined){
    userSocketMap[userId] = socket.id;
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
}

socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
})
})

export {App, io, server}