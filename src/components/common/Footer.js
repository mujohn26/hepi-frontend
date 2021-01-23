import React, { Component } from 'react'
import Header from './Header';
import "../../styles/home.css";
import { Link } from 'react-router-dom';



class Footer extends Component {

    render(){
        return(
            <div className="footer">
            <div className="footer-logo">
              <div style={{ fontSize: "20px", color: "" }}>HEPI</div>
              <div style={{ fontSize: "16px" }}>
                Health escort patient initiative
              </div>
            </div>
            <div className="footer-nav-links">
              <div className='nav-links-title'>
                Quick links
              </div>
              <div > 
              <ul className='footer-links'>
              <li >
                <Link to='/'  style={{color:'white', textDecoration:'none'}}>Home</Link>
              </li>
              <li>
                <Link to='/booking' style={{color:'white', textDecoration:'none'}}>Booking</Link>
              </li>
         
              <li>
                <Link to='/service' style={{color:'white', textDecoration:'none'}}>Our services</Link>
              </li>
              <li>
                <Link to='/join-staff' style={{color:'white', textDecoration:'none'}}>Join our staff</Link>
              </li>
              <li>
                <Link to='/agent' style={{color:'white', textDecoration:'none'}}>Be our agent</Link>
              </li>
              <li>
              <Link to='/advisory-counseling' style={{ color:'white', textDecoration:'none'}}>Talk to doctor and counselling online</Link>
            </li>
              <li>
                <Link to='/contact-us' style={{color:'white', textDecoration:'none'}} >Contact us</Link>
              </li>
            </ul>
              </div>
            </div>
            <div className='footer-contact'>
              <div >Contact</div>
              <div>support@hepi.com</div>
              <div>
              <Link to='/testimonials' style={{color:"white", textDecoration:"none"}}>Give us feedback</Link>
              </div>

            </div>
          </div>
        )
    }
}
export default Footer;