import { useState } from 'react'
import './App.css'
import Register from './components/register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Register />
     </div>
  )
}

export default App
