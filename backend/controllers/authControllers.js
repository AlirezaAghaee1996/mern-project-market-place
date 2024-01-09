import User from "../models/userModel.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
export const signUp=async(req,res,next)=>{
    const {username,password,email}=req.body
    const hashedPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username,password:hashedPassword,email})
    try{
        await newUser.save()
        res.status(201).json({
            status:'success',
            message:'signup successfully'
        })
    }catch(err){
        next(err)
    }
}
export const  signIn=async(req,res,next)=>{
    const {email,password}=req.body
    try{
        const validUser=await User.findOne({email})
        if(!validUser) return next(errorHandler(404,'user not found'))
        const validPassword=bcryptjs.compareSync(password,validUser.password)
        if(!validPassword) return next(errorHandler(401,'wrong user or pass'))
        const token =jwt.sign({id:validUser._id},process.env.JWT_SECRET)
    const {password:pass,...rest}=validUser._doc
        res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)
    }catch(err){
        next(err)
    }
}