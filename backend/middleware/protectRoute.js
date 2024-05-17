import  jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
const protectRoute = async (req, res, next) => {
try {
    const token = req.cookies.jwt;
    if(!token){
        return res.status(401).json({ error: "You need to login first" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded){
        return res.status(401).json({ error: "Invalid Token Found" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if(!user){
        return res.status(401).json({ error: "No user found with this token" });
    }

    req.user = user;

    next();
} catch (error) {
    console.log("Error in protectRoute Middleware: ", error.message);
    res.status(401).json({ error: "Internal Server Error" });
}
}

export default protectRoute;