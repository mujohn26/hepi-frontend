import React, { Component } from "react";
import Navbar from "../common/navbar";
import "../../styles/booking.css";
import "../../styles/service.css";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

class BookingSuccess extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="booking-success-page">
          <div className="booking-success-page-title">Thank you</div>
          <Box m={2} />
          <div className="booking-success-page-message">
            Your request with Health patient initiative was submitted
            <Box m={1} /> successfully one of our team is going to contact you.
            soon
          </div>
          <Box m={2} />
          <div className="booking-success-page-message">
              
            Go to 
            <Link to="/" className='booking-success-page-link'>
              Homepage
            </Link>
          </div>
         
        </div>
      </div>
    );
  }
}

export default BookingSuccess;
