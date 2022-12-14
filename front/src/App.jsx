import Register from './components/routes/Register'
import Login from './components/routes/Login'
import './styles/styles.css'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Home from './components/routes/Home'
import { Route, Routes } from 'react-router-dom'
import Shipping from './components/routes/Shipping'
import BranchOfficeses from './components/routes/BranchOffices'
import Questions from './components/routes/Questions'
import Getinto from './components/routes/Getinto'
import DetailSearch from './components/routes/DetailSearch'



function App() {

  return (
    <div className="App">
       <Header/>
       <Routes>       
       <Route  path='/' element={<Home/>} />
        <Route path='/DetailSearch' element={<DetailSearch/>}></Route>
        <Route path='/getInto' element={<Getinto/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />      
        <Route path='/shipping' element={<Shipping/>} />      
        <Route path='/branchOffices' element={<BranchOfficeses/>} />      
        <Route path='/questions' element={<Questions/>} />        
      </Routes>
      <Footer/>
     </div>
  )
}

export default App
