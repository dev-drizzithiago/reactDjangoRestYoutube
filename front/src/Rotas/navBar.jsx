import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul className='nav-listaLinks'>
            <li>
                <NavLink to='links'>                    
                    Links
                </NavLink> 
            </li>
            <li>
                <NavLink to='mp3'>
                    MP3
                </NavLink> 
            </li>
            <li>
                <NavLink to='mp3'>
                    MP4
                </NavLink> 
            </li>
        </ul>
    </div>
  )
}

export default NavBar;