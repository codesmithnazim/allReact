import React from 'react'

function footer(params) {
  
  return (
    <div className={`w-full flex justify-center items-center ${(params.isDark)? "bg-zinc-500": "bg-cyan-500"}`}>
        All rights Reserved ©
      
    </div>
  )
}

export default footer
