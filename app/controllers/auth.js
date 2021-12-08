import Users from "../models/users.js";
import jwt from "jsonwebtoken";
import Sequelize from "sequelize";
const Op = Sequelize.Op;

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(433).send({message:"Invalid token"});
        const User = await Users.findOne({
            where:{
                RefreshToken:{[Op.eq]:refreshToken}
            }
        });
        if(!User) return res.sendStatus(433).send({message:"Token doesn't exist"});
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(400).send({message:"Verify token failed"});
            const UserId = User.Id;
            const Phone = User.Phone;
            const accessToken = jwt.sign({UserId,Phone}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
        return res.sendStatus(400).send({message:"Authentication failed"});
    }
}