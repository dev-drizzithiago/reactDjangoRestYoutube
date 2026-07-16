import React from 'react'
import { NavLink } from 'react-router-dom'

const IndexBar = () => {

  return (
    <div>
         <ul className='nav-listaLinks'>
            <li>
                <NavLink to='login'>                    
                    Login
                </NavLink> 
            </li>
        </ul>
    </div>
  )
}

export default IndexBar
