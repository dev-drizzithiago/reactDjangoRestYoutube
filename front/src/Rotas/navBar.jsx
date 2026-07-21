import React from 'react'
import { NavLink } from 'react-router-dom'

const navBar = () => {
  return (
    <div>
        <ul className='nav-listaLinks'>
            <li>
                <NavLink to='links'>                    
                    Links
                </NavLink> 
            </li>
        </ul>
    </div>
  )
}

export default navBar();