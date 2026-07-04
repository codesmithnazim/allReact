import { useState } from 'react'
import Header from "./components/header.jsx"
import './App.css'
import Card from "./components/cardBox.jsx"

function App() {

  const [state, setstate] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  // const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <div className="counter  text-zinc-600">
        jeajweklajdksajdkashdjkashdkjhaskjdhas
        <div className="value">{state}</div>
        <button className="clickMe" onClick={() => { setstate(state + 1) }}>click me</button>
      </div>

      <div className="cards grid grid-cols-3 items-center justify-center justify-items-center  p-5 gap-4">
        <Card name={"Sajjad Hussanin"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk26dAV_eJuitNk9f7GmbWe4qbadULPL0jandoB-jbXQ&s=10"}/>
        <Card name={"Mutasim Khan"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAMEfjpamIpBYMZ8Bky1I9LNlmsBRjwMbD_jjbq-xqg&s=10"}/>
        <Card name={"Changez Khan"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcQtIvNRz-LSQeGuRlPAScA_Pf3gw-AP0MihQW5JKWw&s=10"} />
        <Card name={"Okthai Khan"}/>
        <Card name={"Gehatho khan"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi88NCL6qOBgq5FHQvvbIcdE0zQMqkqkoG3SXmwVEWzw&s=10"} size={"contain"}/>
      </div>

    </>
  )
}

export default App
