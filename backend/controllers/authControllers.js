import User from "../models/userModel.js"

export const signUp=async(req,res)=>{
    const {username,password,email}=req.body
    const newUser=new User({username,password,email})
    await newUser.save()
    res.status(201).json({
        status:'success',
        message:'signup successfully'
    })

}