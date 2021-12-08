import Users from "../models/users.js";
import Businesses from "../models/businesses.js";
import Sequelize from "sequelize";
import jwt from "jsonwebtoken";
const Op = Sequelize.Op;

export const getUsers = async(req,res) =>{
    try {
        const users = await User.findAll({
            attributes:["Id","Name","Phone","CreatedAt","UpdatedAt"]
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req,res) =>{
    const {name, phone} = req.body;
    let createUser;
    let createBusinesses;
    try {
        //check is user with phone number already exist
        const CheckUser = await User.findOne({where:{
            Phone:{[Op.eq]:phone}
        }, 
        });
        if(CheckUser) return res.status(422).send({message:"User with that number phone already exists"}); 
        //create user
        createUser = await Users.create({
            Name: name,
            Phone: phone,
            CreatedAt: Date.now(),
            UpdatedAt: Date.now()
        },{
            fields:["Name","Phone","CreatedAt","UpdatedAt"]
        });
        //create business
        createBusinesses = await Businesses.create({
            UserId: createUser.Id,
            CreatedBy: phone,
            CreatedAt: Date.now(),
            UpdatedAt: Date.now()
        },{
            fields:["UserId","CreatedBy","CreatedAt","UpdatedAt"]
        });

        return res.status(200).send({message: "Register Sucessed"});
    } catch (error) {
        await createUser.destroy();
        await createBusinesses.destroy();
        console.log(error);
        return res.status(400).send({message: "Register Failed"});
    }
}

export const Login = async(req,res) =>{
    const {phone} = req.body;
    try {
        const User = await Users.findOne({where:{
            Phone:{[Op.eq]:phone}
        }});
        if(!User) return res.status(433).send({message:"User doesn't exists"});
        const UserId = User.Id;
        const Phone = User.Phone;
        const accessToken = jwt.sign({UserId,Phone},process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '60s'
        });
        const refreshToken = jwt.sign({UserId,Phone},process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update(
            {RefreshToken: refreshToken},
            {where:{
            Id:{[Op.eq]:UserId}
        }});
        res.cookie('refreshToken',refreshToken,{
            httpOnly:true,
            maxAge: 86400000 //24h
        });
        return res.status(200).json({accessToken});
    } catch (error) {
       console.log(error);
       return res.status(400).send({message:"Login Failed"}); 
    }
}

export const Logout = async(req,res) =>{
    try {
        const refresToken = req.body.token
        if(!refresToken)return res.sendStatus(433);

        const User = await Users.findOne({where:{
            RefreshToken:{[Op.eq]:refresToken}
        }});

        if(!User) return res.sendStatus(433);

        await Users.update(
            {RefreshToken: null},
            {where:{
            Id:{[Op.eq]:User.Id}
        }});
        res.clearCookie("refreshToken");
        return res.sendStatus(200)
    } catch (error) {
        
    }
}