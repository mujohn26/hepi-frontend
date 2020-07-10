import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.scss';



const Header = () => {
  const [navDrawer, setnavDrawer] = useState(0);
const openNav = () =>{
setnavDrawer(!navDrawer);
}

  return (
    <>
      <div className='header-section'>
        <div className='nav-drawer-icon'>
          <span onClick={openNav} class='openbtn'>
            &#9776;
          </span>
        </div>
        <div className='nav-menu'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/order'>Order nurse</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
            <li>
              <Link to='/service'>Our services</Link>
            </li>
            <li>
              <Link to='/join'>Join our team</Link>
            </li>
            <li>
              <Link to='/agent'>Be our agent</Link>
            </li>
          </ul>
        </div>
      </div>
      {navDrawer ? ( 
        <div className='mobile-nav'>
          <div className='nav-menu'>
            <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/order'>Order nurse</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
            <li>
              <Link to='/service'>Our services</Link>
            </li>
            <li>
              <Link to='/join'>Join our team</Link>
            </li>
            <li>
              <Link to='/agent'>Be our agent</Link>
            </li>
            </ul> 
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};


export default Header;
