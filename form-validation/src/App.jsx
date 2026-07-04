import React, { useState } from 'react'


function App() {
  const submitfunction = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
    if (e.target.value.includes(" ")) {
      throw new Error("The input should not contain empty space");

    }
  }

  const [name, setName] = useState('')
  return (
    <div>
      <form action="" method="post">
        <input type="text" className="p-3 border-2 rounded-full bg-zinc-700 text-white" id="" value={name}
          onChange={(e) => {
            submitfunction(e)
          }} />
        <button type='submit' className='p-1.5 border-2 rounded-full '
          onClick={e => { e.preventDefault(), console.log({ name }), setName('') }}
        >Submit</button>
      </form>
    </div>
  )
}

export default App
