import React ,{useEffect} from 'react'

function Header({ Color }) {
useEffect(() => {
  

  return () => {
    alert("The useeffect from the header.jsx")
    
  }
},[Color])

    
    return (
        <div style={{ color: `${Color}` }}>
            I am the header with {Color} text
        </div>
    )
}

export default Header