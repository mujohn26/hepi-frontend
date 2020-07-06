import React, { Component } from "react";
import "../../styles/home.css";
import Header from "../common/Header";
// import Header from '../common/Header';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="upper-container">
          <div>
          <div>

          </div>
          <div>

          </div><Header/></div>
          <div className="upper-main-container">
            <div>search</div>
            <div className="nurse-photo-container"></div>
          </div>
        </div>
        <div>div 2</div>
        <div>div 3</div>
      </div>
    );
  }
}

export default Home;
