import { useState } from 'react'
import './App.css'
import Register from './components/register/Register'
import Login from './components/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Register />
        <Login />
     </div>
  )
}

export default App
