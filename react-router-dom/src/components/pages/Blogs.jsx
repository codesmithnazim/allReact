import React from 'react'
import { useParams } from 'react-router-dom'

function Blogs() {
  let params= useParams()
  return (
    <div className='text-3xl absolute top-1/2 left-[45%] color-white underline'>
      Blogs No {params.number}
    </div>
  )
}

export default Blogs
