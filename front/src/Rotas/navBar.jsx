import React from 'react'
import { NavLink } from 'react-router-dom'

export default function () {
  return (
    <div>
        <ul className='nav-listaLinks'>
            <li>
                <NavLink to='login'>                    
                    Links
                </NavLink> 
            </li>
        </ul>
    </div>
  )
}
