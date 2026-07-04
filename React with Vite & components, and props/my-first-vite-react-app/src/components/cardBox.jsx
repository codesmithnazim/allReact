import React from 'react'

function cardBox(props) {
  return (
    <div className='flex flex-col gap-3 border-2 border-black rounded-md p-5 overflow-hidden'>
      <div className="name text-3xl tracking-tight font-medium border-2 border-red-400 bg-cover  h-80 w-70" style={{ backgroundImage: `url(${props.image})`,border:" 2px solid pink ", backgroundSize:`${props.size}`}}>{props.name}</div>
      {/* <div className="name text-3xl tracking-tight font-medium border-2 border-red-400" >{props.name}</div>
      <div className="name text-3xl tracking-tight font-medium border-2 border-red-400" >{props.name}</div>
      <div className="name text-3xl tracking-tight font-medium border-2 border-red-400" >{props.name}</div>
      <div className="name text-3xl tracking-tight font-medium border-2 border-red-400" >{props.name}</div> */}
    </div>
  )
}

export default cardBox
