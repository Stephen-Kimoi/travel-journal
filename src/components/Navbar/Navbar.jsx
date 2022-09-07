import React from 'react'; 
import map from '../assets/map.svg';                                                                                                                                                            './'

const Navbar = () => {
  return (
     <nav className='navbar'>
        <div className='navbar-container'>
            <img src={map} alt='map'/>
            <h1>my travel journal</h1>
        </div>
     </nav>
  )
}

export default Navbar