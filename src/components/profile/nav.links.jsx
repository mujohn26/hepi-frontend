import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider, Typography, Collapse, List } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "../../assets/images/dashboard.png";
import ListIcon from "@material-ui/icons/List";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import verifyToken from "../../helpers/verifyToken";
import { connect } from "react-redux";

const useStyles = (theme) => ({
  isActive: {
    backgroundColor: "#F1F1F1",
    color: "#2196F3",
  },
});

export class NavLinks extends Component {
  state = {
    bgcolor: "#f1f1f1",
    role: "",
    location: "/",
    open: false,
  };

  UNSAFE_componentWillMount() {
    const token = localStorage.getItem("token");

    const user = verifyToken(token);
    this.setState({
      role: user.payload.role,
    });
  }

  isActive = (path) => {
    return path == this.state.location;
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        style={{ width: "100%", backgroundColor: "white", marginTop: "15px" }}
      >
        {this.state.role==='agent'?(
          <div>
      <ListItem
          id="profile"
          selected={this.isActive("/dashboard/services")}
          button
          onClick={() => {
            this.setState({ location: "/dashboard/services" });
          }}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to="/dashboard/agent/AgentHistory" style={{ textDecoration: "none" }}>
              <Typography style={{ fontSize: this.state.fontSize }}>
                View history
              </Typography>
            </Link>
          </ListItemText>
        </ListItem>
          </div>


      

        ):(
          <div>
            {/* <Divider /> */}

            <ListItem
          id="profile"
          selected={this.isActive("/dashboard")}
          button
          onClick={() => {
            this.setState({ location: "/dashboard" });
          }}
        >
          <ListItemIcon>
            <img src={DashboardIcon} alt="dashboard" />
          </ListItemIcon>
          <ListItemText>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Typography style={{ fontSize: this.state.fontSize }}>
                Dashboard
              </Typography>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem
          id="profile"
          selected={this.isActive("/dashboard/requests")}
          button
          onClick={() => {
            this.setState({ location: "/dashboard/requests" });
          }}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to="/dashboard/requests" style={{ textDecoration: "none" }}>
              <Typography style={{ fontSize: this.state.fontSize }}>
                View requests
              </Typography>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem
          id="profile"
          selected={this.isActive("/dashboard/staff")}
          button
          onClick={() => {
            this.setState({ location: "/dashboard/staff" });
          }}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to="/dashboard/staff" style={{ textDecoration: "none" }}>
              <Typography style={{ fontSize: this.state.fontSize }}>
                View staffs
              </Typography>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem
          id="profile"
          selected={this.isActive("/dashboard/agents")}
          button
          onClick={() => {
            this.setState({ location: "/dashboard/agents" });
          }}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to="/dashboard/agents" style={{ textDecoration: "none" }}>
              <Typography style={{ fontSize: this.state.fontSize }}>
                View agents
              </Typography>
            </Link>
          </ListItemText>
        </ListItem>
        {this.state.role === "superAdmin" ? (
          <ListItem
            id="profile"
            selected={this.isActive("/dashboard/add-admin")}
            button
            onClick={() => {
              this.setState({ location: "/dashboard/add-admin" });
            }}
          >
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>
              <Link to="/dashboard/add-admin" style={{ textDecoration: "none" }}>
                <Typography style={{ fontSize: this.state.fontSize }}>
                  Add admin
                </Typography>
              </Link>
            </ListItemText>
          </ListItem>
        ) : (
          ""
        )}
        <ListItem
          id="profile"
          selected={this.isActive("/dashboard/services")}
          button
          onClick={() => {
            this.setState({ location: "/dashboard/services" });
          }}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to="/dashboard/services" style={{ textDecoration: "none" }}>
              <Typography style={{ fontSize: this.state.fontSize }}>
                Services
              </Typography>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem
          id="profile"
          selected={this.isActive("/dashboard/counseling-adversary")}
          button
          onClick={() => {
            this.setState({ location: "/dashboard/counseling-adversary" });
          }}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to="/dashboard/counseling-adversary" style={{ textDecoration: "none" }}>
              <Typography style={{ fontSize: this.state.fontSize }}>
                counseling & adversary
              </Typography>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem
          id="profile"
          selected={this.isActive("/dashboard/mperekeza")}
          button
          onClick={() => {
            this.setState({ location: "/dashboard/mperekeza" });
          }}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to="/dashboard/mperekeza" style={{ textDecoration: "none" }}>
              <Typography style={{ fontSize: this.state.fontSize }}>
                Mperekeza
              </Typography>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem
          id="profile"
          selected={this.isActive("/dashboard/testimonial")}
          button
          onClick={() => {
            this.setState({ location: "/dashboard/testimonial" });
          }}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to="/dashboard/testimonial" style={{ textDecoration: "none" }}>
              <Typography style={{ fontSize: this.state.fontSize }}>
                Testimonials
              </Typography>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem
          id="profile"
          selected={this.isActive("/dashboard/agent-cash")}
          button
          onClick={() => {
            this.setState({ location: "/dashboard/agent-cash" });
          }}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to="/dashboard/agent-cash" style={{ textDecoration: "none" }}>
              <Typography style={{ fontSize: this.state.fontSize }}>
                Agent cash
              </Typography>
            </Link>
          </ListItemText>
        </ListItem>
          </div>
        )
        
      
      }

      </Grid>
    );
  }
}
export const mapStateToProps = (state) => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(withStyles(useStyles)(withRouter(NavLinks)));
