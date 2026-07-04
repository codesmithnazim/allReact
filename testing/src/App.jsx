// import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState({ "name": "Nazim Ud Din", "age": 19.5, "email": "khan@gmail.com" })

  const btnClicked = async (namee, agee) => {
    // let newNum = {...count}
    // newNum[0] = name
    // newNum[1] = agee
    // setcount(newNum)
    setcount(prev => ({ ...prev, "name": namee, "age": agee }))//setcount(prev => {return { ...prev, "name": namee, "age": agee }})
    // setcount({name:"rehan","age":33,"mazeed kooch":"baass ithna hee"})
    console.log(count)
    // count.name=params
    // console.log(count.name)
    // setcount(count)
  }

  return (
    <>
      <h1 className='text-sm w-fit px-5 py-3 h-fit bg-gray-600 text-white border-amber-50 border-2 rounded-full'>Name = {count.name} & Age = {count.age}</h1>
      <button className='p-3 border-2 border-amber-50 rounded-full bg-slate-400 text-white ' onClick={() => {
        btnClicked('Rehan', 23.5)
      }}>click me for changes</button>



    </>

  )
}

export default App
