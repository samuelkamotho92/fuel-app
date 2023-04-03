const User = require('../Models/userAuth');
const jwtoken = require('jsonwebtoken');
let maxAge = 3*24*60*60
const createjwt = (id)=>{
    return jwtoken.sign({id},process.env.SECRET,{
        expiresIn:maxAge
    })
 };

exports.register = async(req,res)=>{
    console.log(req.body);
    try{
 const userRegistered = await User.create(req.body);
 const id = userRegistered._id;
 const tk = createjwt(id);
 res.cookie('user',tk,{httpOnly:true,maxAge: maxAge* 1000});
 res.status(200).json({
    userRegistered,
    tk});
    }catch(err){
        console.log(err)
    }
}
exports.login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        console.log(email,password);
        const getUser = await User.login(email,password);
        console.log(getUser)
        const id = getUser._id;
        const tk = createjwt(id);
        res.cookie('user',tk,{httpOnly:true,maxAge: maxAge* 1000})
    console.log(getUser);
    res.status(200).json({
        getUser,
        tk
    })
    }catch(err){
        res.status(404).json(err)
    }
}

exports.getUsers = async(req,resp)=>{
    try{
        const getUsers = await User.find();
        // console.log(getUsers)
        resp.status(200).json(getUsers)
    }catch(err){
resp.status(404).json(err)
    }
}

exports.getUser = async(req,resp)=>{
try{
const getUser = await User.findById(req.params.id);
resp.status(200).json(getUser);
}catch(err){
resp.status(404).json(err);
}
}
exports.updateUser = async (req,resp)=>{
    console.log(req.body);
    try{
        const id = req.params.id;
        console.log(req.body);
        const updatedUser = await User.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true
        });
        console.log(updatedUser);
        resp.status(201).json({
            status:"success",
            user:updatedUser
        })
    }catch(err){
        resp.status(404).json({
            status:'failure',
            error:err
        })
    }   
}

exports.deleteUser = async (req,resp)=>{
    try
    {
        const id = req.params.id;
        console.log(id);
        const deletedUser = await User.findByIdAndDelete(id);
        console.log(deletedUser);
        resp.status(204).json({
            status:'deleted',
            data:[]
        })
    }catch(err){
        resp.status(404).json(err)

    }
}

exports.createUser = async(req,resp)=>{
    try
    {
        console.log(req.body)
const user = await User.create(req.body);
console.log(user);
resp.status(200).json(user)
    }catch(err){
resp.status(404).json(err)
    }
}