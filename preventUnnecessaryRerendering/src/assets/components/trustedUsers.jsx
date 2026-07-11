import React, { useState } from 'react'

function trustedUsers({children}) {
    const [count, setCount] = useState(0)
  return (
    <>
          <div className="bg-red-500  text-white pl-4 py-4">
        I am the app.jsx data and the count
        <span
          className="text-zinc-800 underline cursor-pointer"
          onClick={() => setCount((e) => e + 1)}
        >
          {count}
        </span>
      </div>
      {children}
    </>
  )
}

export default trustedUsers
