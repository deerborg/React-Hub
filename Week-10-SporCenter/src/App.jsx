import { useState } from 'react'
import './App.css'
import Nav from './component/Nav'
import Header from './component/Header'
import Stats from './component/Stats'
import Classes from './component/Classes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav></Nav>
     <Header></Header>
     <Stats></Stats>
     <Classes></Classes>
    </>
  )
}

export default App
