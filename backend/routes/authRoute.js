import express from 'express'
import { signUp } from '../controllers/authControllers.js'
const router=express.Router()
router.post('/signup',signUp)


export default router