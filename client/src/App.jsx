import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import Header from './Components/Header'
import SignUp from './pages/SignUp'
export default function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/sign-up' element={<SignUp/>}/>
        <Route exact path='/sing-in' element={<SignIn/>}/>
      </Routes>

    </>
  )
}
