import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../styles/styles.scss';



class  Header extends Component{
  constructor(props) {
		super(props);
		this.state = {
      navDrawer:0
		};
	}
 openNav(){
this.setState({
  navDrawer:1
})
}
render(){
  return (
    <>
      <div className='header-section'>
        <div className='nav-drawer-icon'>
          <span onClick={this.openNav.bind(this)} class='openbtn'>
            &#9776;
          </span>
        </div>
        <div className='nav-menu'>
          <ul>
            <li >
              <Link to='/' style={{ color:'#737793'}}>Home</Link>
            </li>
            <li className='nav__menu-item'>
              <Link to='/booking' style={{ color:'#737793'}}>

                Booking
              </Link>
            </li>

            <li>
              <Link to='/service' style={{ color:'#737793'}}>Our services</Link>
            </li>
            <li>
              <Link to='/join-staff' style={{ color:'#737793'}}>Join our staff</Link>
            </li>
            <li>
              <Link to='/agent' style={{ color:'#737793'}}>Be our agent</Link>
            </li>
            <li>
              <Link to='/mperekeza' style={{ color:'#737793'}}>Mperekeza</Link>
            </li>
            <li>
              <Link to='/advisory-counseling' style={{ color:'#737793'}}>Counselling</Link>
            </li>
          </ul>
        </div>
      </div>
      {this.state.navDrawer ? ( 
        <div className='mobile-nav'>
          <div className='nav-menu'>
            <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/booking'>Booking</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
            <li>
              <Link to='/service'>Our services</Link>
            </li>
            <li>
              <Link to='/join'>Join our staff</Link>
            </li>
            <li>
              <Link to='/advisory-counseling' style={{ color:'#737793'}}>Counselling</Link>
            </li>
            <li>
              <Link to='/agent'>Be our agent</Link>
            </li>
            <li>
              <Link to='/mperekeza' style={{ color:'#737793'}}>Mperekeza</Link>
            </li>
            </ul> 
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );}
};


export default Header;
