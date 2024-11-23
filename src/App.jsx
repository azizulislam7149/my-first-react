import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friend from './Friend'

function App() {
  const [count, setCount] = useState(0)

  function handleClick (){
    alert('click the function')
  }
  const HandleClick2 = ()=>{
    alert('hello , how are you?')
  }
  return (
    <>
     
     
      <h1>My second React</h1>
     <button onClick={handleClick}>Click on the function</button>
     <button onClick={HandleClick2}>Click on the function the next option</button>
    <Counter></Counter>
      <br />
      <Team></Team>
      <Users></Users>
      <Friend></Friend>

    </>
  )
}

export default App
