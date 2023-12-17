import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignOut from './pages/SignOut'
import SignIn from './pages/SignIn'
import Header from './Components/Header'
export default function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/sign-out' element={<SignOut/>}/>
        <Route exact path='/sing-in' element={<SignIn/>}/>
      </Routes>

    </>
  )
}
