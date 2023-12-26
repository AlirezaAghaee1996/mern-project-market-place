import express from 'express'
import { signUp,signIn } from '../controllers/authControllers.js'
const router=express.Router()
router.post('/signup',signUp)
router.post('/',signIn)



export default router