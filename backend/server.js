import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from './db/connectDB.js'

import { App, server } from "./socket/socket.js";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

App.use(express.json());
App.use(cookieParser());

App.use("/api/auth", authRoutes);
App.use("/api/messages", messageRoutes);
App.use("/api/users", userRoutes);

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`✔️  Server Running on port ${PORT}`);
});