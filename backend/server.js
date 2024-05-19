import express from "express";
import path from 'path';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from './db/connectDB.js'

import { App, server } from "./socket/socket.js";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
dotenv.config();

App.use(express.json());
App.use(cookieParser());

App.use("/api/auth", authRoutes);
App.use("/api/messages", messageRoutes);
App.use("/api/users", userRoutes);

App.use(express.static(path.join(__dirname, "/frontend/dist")));

App.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`✔️  Server Running on port ${PORT}`);
});