import express from "express";
import {verifyToken} from "../middlewares/jwt-auth.js"
import {refreshToken} from "../controllers/auth.js"
import {getUsers,Register,Login,Logout} from "../controllers/user.js";


const router = express.Router();

//home
router.get("/api/version", (res) => res.status(200).send({message: "Service Ready"}));

//User Router
router.get("/api/users", verifyToken,getUsers);
router.post("/api/register", Register);
router.post("/api/login", Login);
router.get("/api/token", refreshToken);
router.delete("/api/logout", Logout);

export default router