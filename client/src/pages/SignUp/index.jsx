import { useState } from "react"
import useFormFields from "../../utils/useFormFields"
import {Link, useNavigate} from 'react-router-dom'
import Toast from "../../Components/Toast/Toast"
export default function SignUp() {
  const [fields,handleChange]=useFormFields()
  const navigate=useNavigate()
  const [err,setErr]=useState()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const res=await fetch('http://localhost:3000/api/auth/signup',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },body:JSON.stringify(fields)
      })
      const data=await res.json()
      navigate('/sign-in')
    }catch(err){
      setErr(err)
    }
  }
  return (
    <div className="p-11 mx-auto max-w-lg bg-stone-50 rounded-3xl mt-3">
      <h1 className="text-3xl text-center mb-7 font-semibold">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input onChange={handleChange} name="username" type="text" className="border p-3 rounded-lg" placeholder="Username"/>
      <input onChange={handleChange} name="email" type="email" className="border p-3 rounded-lg" placeholder="Email"/>
      <input onChange={handleChange} name="password" type="password" className="border p-3 rounded-lg" placeholder="Password"/>
      <button type="submit" className="bg-sky-900 py-5 text-white rounded-lg">Sign Up</button>
        <Link className="no-underline " to={'/sign-in'}>
        Do You have a account?
          <span className="text-blue-600">clicked</span>
        </Link>
      </form>
      {err&& <Toast type="warning" message={err}/>}
    </div>
  )
}
