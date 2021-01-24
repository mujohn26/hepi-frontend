import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/home.css";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "../../styles/Home";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import {
  getTestimonials,
  getTestimonialSuccess,
  getTestimonialFailure,
} from "../../redux/actions/TestimonialsAction";
import {
  getStaffs,
  getStaffSuccess,
  getStaffFailure,
} from "../../redux/actions/homeActions";
import HomeMobileView from "./homeMobile";
import { createBrowserHistory } from "history";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import doctorIcon from "../../assets/images/doctor.png";
export const history = createBrowserHistory({
  forceRefresh: true,
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      navBackground: "",
      activeItemIndex: 0,
      hideNav: true,
      isOpenDrawer: false,
      pageHeight: 0,
    };
  }
  handleDrawerOpen() {
    this.setState({
      isOpenDrawer: true,
    });
  }

  handleDrawerClose() {
    this.setState({
      isOpenDrawer: false,
    });
  }
  handleClickCourse = (id) => {
    this.setState({
      courseId: id,
    });
  };
  isSelected = (id) => {
    return id == this.state.courseId;
  };

  componentDidMount() {
    this.setState({
      pageHeight: window.innerHeight,
    });
  }
  makeBooking() {
    history.push("/booking");
  }
  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          height: `${this.state.pageHeight}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor:"#f0f0f0"
        }}
      >
        <div>
          <AppBar
            position="fixed"
            // className={clsx(classes.appBar, {
            //   [classes.appBarShift]: open,
            // })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen.bind(this)}
                edge="start"
                // className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={this.state.isOpenDrawer}
            // classes={{
            //   paper: classes.drawerPaper,
            // }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose.bind(this)}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <HomeIcon style={{ height: "20px", width: "20px" }} />
                </ListItemIcon>
                <Link
                  to="/"
                  style={{ color: "#737793", textDecoration: "none" }}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <LocalHospitalIcon
                    style={{ height: "20px", width: "20px" }}
                  />
                </ListItemIcon>

                <Link
                  to="/booking"
                  style={{ color: "#737793", textDecoration: "none" }}
                >
                  Booking
                </Link>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  {" "}
                  <ListAltIcon style={{ height: "20px", width: "20px" }} />
                </ListItemIcon>

                <Link
                  to="/service"
                  style={{ color: "#737793", textDecoration: "none" }}
                >
                  Our services
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <PeopleOutlineIcon
                    style={{ height: "20px", width: "20px" }}
                  />
                </ListItemIcon>

                <Link
                  to="/join-staff"
                  style={{ color: "#737793", textDecoration: "none" }}
                >
                  Join our staff
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <PeopleOutlineIcon
                    style={{ height: "20px", width: "20px" }}
                  />
                </ListItemIcon>

                <Link
                  to="/agent"
                  style={{ color: "#737793", textDecoration: "none" }}
                >
                  Be our agent
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <LocalHospitalIcon
                    style={{ height: "20px", width: "20px" }}
                  />
                </ListItemIcon>

                <Link
                  to="/mperekeza"
                  style={{ color: "#737793", textDecoration: "none" }}
                >
                  Mperekeza
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <LocalHospitalIcon
                    style={{ height: "20px", width: "20px" }}
                  />
                </ListItemIcon>
                <Link
                  to="/advisory-counseling"
                  style={{ color: "#737793", textDecoration: "none" }}
                >
                  Counselling
                </Link>
              </ListItem>
              {/* </li> */}
            </List>
          </Drawer>
        </div>

        <div style={{ display: "flex", flexDirection: "column",  }} >
          <div
            style={{
              fontSize: "18px",
              color: "#737793",
              textAlign:"center"
              // paddingLeft: "14px",
              // paddingRight: "14px",
            }}
          >
            Health escort patient initiative it's an online platform which gives
            health care assistance.
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "5%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10%",
              }}
            >
              <div>
                <div
                  className="search-main-section-title"
                  style={{ fontSize: "18px",marginLeft:"5%" }}
                >
                  Easily book a nurse or a doctor anywhere in Rwanda
                </div>

                <div
                style={{marginLeft:"10%"}}
                >
                  <Button
                    className={classes.Button}
                    variant="contained"
                    color="primary"
                    onClick={this.makeBooking.bind(this)}
                  >
                    Book
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src={doctorIcon}
                  alt="doctor iccon"
                  height="140px"
                  width="120px"
                  style={{ margin: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <Divider />

        <div
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ fontSize: "18px", textAlign:"center" }}>Our staff and Testimonials</div>
          <div style={{ marginTop: "5%", fontSize: "15px", color: "#737793",textAlign:"center"  }}>
            We have qualified staff and experts who are always here to assist in
            any possible mean of health issue
          </div>
        </div>

        <div
          style={{
            height: "80px",
            width: "100%",
            backgroundColor: "blue",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            color: "white",
          }}
        >
          <div style={{ marginTop: "3%" }}>
            <div style={{ fontWeight: "bold", marginBottom: "5%" }}>
              Location:
            </div>
            <div style={{ fontSize: "12px" }}>Kigali-Rwanda</div>
          </div>
          <div style={{ marginTop: "3%" }}>
            <div style={{ fontWeight: "bold", marginBottom: "5%" }}>
              Contact us
            </div>
            <div style={{ fontSize: "12px" }}>Tel:+250783036687</div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    requestMessage: state.testimonialReducer.message,
    testimonials: state.testimonialReducer.data,
    staffData: state.homeReducer.data,
  };
};
const connectedHomePage = connect(mapStateToProps, {
  getTestimonials,
  getTestimonialSuccess,
  getTestimonialFailure,
  getStaffs,
  getStaffSuccess,
  getStaffFailure,
})(withStyles(Styles)(Home));

export default connectedHomePage;
