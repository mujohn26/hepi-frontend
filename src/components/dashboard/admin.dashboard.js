import React, { Component } from "react";
import verifyToken from "../../helpers/verifyToken";
// import Navlinks from '../profile/Nav.links.jsx/index.js.js';
import "../../styles/dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      role:""
    };
  }
  UNSAFE_componentWillMount() {
    const token = localStorage.getItem("token");
    const user = verifyToken(token);
    this.setState({
      name: user.payload.firstName,
      role:user.payload.role
    });
  }
  render() {
    return (
      <div className="dashboardContainer">
        <div className="navlinkContainer">
          {/* <Navlinks/> */}
          <h2>Welcome to {this.state.role ==='agent'?'Agent':"Admin"} dashboard  {this.state.name}</h2>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
