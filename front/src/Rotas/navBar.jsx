import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav_divPrincipal'>

        <ul className='nav_listaLinks'>
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
                <NavLink to='mp4'>
                    MP4
                </NavLink> 
            </li>
        </ul>
        
    </div>
  )
}

export default NavBar;