import Register from './components/routes/Register'
import Login from './components/routes/Login'
import './styles/styles.css'
import Header from './components/shared/Header'
import Home from './components/routes/Home'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="App">
       <Header/>
       <Routes>       
       <Route  path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />      
      </Routes>

     </div>
  )
}

export default App
