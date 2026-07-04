import React from 'react'

function header(prop) {
    return (
        <div>
            <ul className='uol'>
            <div className="logo">{prop.logoname}</div>
                <li>Community</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default header
