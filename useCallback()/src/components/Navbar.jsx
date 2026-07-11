import  { memo } from 'react'

function Navbar({adjective}) {
    console.log("Navbar is rendered again, and the transfered adjective = ", adjective())
  return (
    <div className='bg-red-500 p-3 '>
      I'm {adjective()} Navbar
    </div>
  )
}

export default memo(Navbar)
