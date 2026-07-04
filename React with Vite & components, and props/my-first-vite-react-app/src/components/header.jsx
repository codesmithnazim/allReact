import React from 'react'
import "../index.css"

function header() {
  return (
    <div className='header'>
      <ul>
        <li onClick={{ backgroundColor: "blue" }} className='text-zinc-800 cursor-pointer'>partnership</li>
        <li>wholeSale</li>
        <li>Branches</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default header