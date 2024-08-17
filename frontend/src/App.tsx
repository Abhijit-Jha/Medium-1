import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'

import MainPage from './pages/MainPage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Post from './pages/Post'
import Write from './pages/Write'

function App() {
  return <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/post/:id' element={<Post/>}></Route>
      <Route path='/write' element={<Write/>}></Route>
    </Routes>
    </BrowserRouter>
  </>
    
}

export default App
