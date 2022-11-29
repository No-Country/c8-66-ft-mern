import Register from './components/routes/Register'
import Login from './components/routes/Login'
import './styles/styles.css'
import Header from './components/shared/Header'
import Home from './components/routes/Home'
import { Route, Routes } from 'react-router-dom'
import Shipping from './components/routes/Shipping'
import BranchOfficeses from './components/routes/BranchOffices'
import Questions from './components/routes/Questions'



function App() {

  return (
    <div className="App">
       <Header/>
       <Routes>       
       <Route  path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />      
        <Route path='/register' element={<Register/>} />
        <Route path='/shipping' element={<Shipping/>} />      
        <Route path='/branchOffices' element={<BranchOfficeses/>} />      
        <Route path='/questions' element={<Questions/>} />        
      </Routes>

     </div>
  )
}

export default App
