import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User firstName = "flogert" lastName="cikeu"></User>
      <User firstName = "test" lastName = "test2"></User>
    </>
  )
}

export default App
