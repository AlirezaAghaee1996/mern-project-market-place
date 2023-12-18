import express from 'express'
const router=express.Router()

router.get('/',(req,res)=>{
    console.log(req.body)
})

export default router