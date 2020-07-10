import React, { Component } from "react";
import "../../styles/home.css";
import Header from "../common/Header";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  TextField:{
    width:"500px"
  }
}));

class Home extends Component {
  render() {
    // const classes = useStyles();
    return (
      <div className="home-container">
        <div className="upper-container">
          <div className="nav-bar-container">
            <div className="logo-container">
              <div style={{ marginLeft: "60px" }}>HEPI</div>
              <div style={{fontSize:'16px'}}>Health escort patient initiative</div>
            </div>
            <div>
              <Header />
            </div>
          </div>
          <div className="upper-main-container">
            <div className="search-section-container">
              <div className="search-section-title">
                <div>

                Find a nurse 
                </div>
                <div style={{marginLeft:"20%"}}> 
                & book online

                </div>
              </div>
              <div className="search-section-main">
                <div className="search-main-section-title">
                Easily book a nurse or a doctor anywhere in Rwanda
                </div>
                <div className="input-field-container">
                  <div style={{marginRight:"15px"}}>

                <TextField  id="outlined-search" label="Type name here" type="search" variant="outlined" />
                  </div>
              <div>
              <Button variant="contained" color="primary" >
      search a nurse
    </Button>
              </div>
                </div>
              </div>
            </div>
            <div className="nurse-photo-container"></div>
          </div>
        </div>
        {/* end of Navbar main header section */}
        <div>div 2</div>
        <div>div 3</div>
      </div>
    );
  }
}

export default Home;
