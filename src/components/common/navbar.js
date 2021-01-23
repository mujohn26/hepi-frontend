import React, { Component } from 'react'
import Header from './Header';
import "../../styles/home.css";
import logo from '../../assets/images/logo.png'


class Navbar extends Component {

    render(){
        return(
            <div className="nav-bar-container">
            <div className="logo-container">
              
                <img src={logo} alt="logo" height="100px" width="100px" style={{marginLeft:"5%", marginTop:"50%"}}/>
             
            </div>
            <div className='header'>
              <Header />
            </div>
          </div>
        )
    }
}
export default Navbar;