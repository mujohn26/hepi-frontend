import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/style.scss';

const Header = () => {
  const [navDrawer, setnavDrawer] = useState(0);
  const openNav = () => {
    setnavDrawer(!navDrawer);
  };

  return (
    <>
      <div className='header-section'>
        <div className='nav-drawer-icon'>
          <span onClick={openNav} class='openbtn'>
            &#9776;
          </span>
        </div>
        <div className='nav-logo'>
          <Link to='/'>HePay</Link>
        </div>
        <div className="search-section">
            <input className="search-input" type="text" placeholder="Transaction ID or Patient ID" />
        </div>
      </div>
      {navDrawer ? <div className='mobile-nav'></div> : ''}
    </>
  );
};

export default Header;