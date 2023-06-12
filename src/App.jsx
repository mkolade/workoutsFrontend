import {BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import useAuthContext from './hooks/useAuthContext'

function App() {
  const {user} = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={user ? <Home/> : <Navigate to={'/login'}/>}/>
            <Route path='/signup' element={!user ? <SignUp/> : <Navigate to={'/'}/>}/>
            <Route path='/login' element={!user ? <Login/> : <Navigate to={'/'}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
