import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/service.css";
import Navbar from "../common/navbar";
import Footer from "../common/Footer";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "../../styles/service";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import {
  agentRegister,
  agentCreatedSuccess,
  agentCreatedFailure,
} from "../../redux/actions/agentAction";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory({
  forceRefresh: true,
});
class Agent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      checked: false,
      isDisabled: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      tel: "",
      nationality: "",
      modePay1: "",
      accountNmbr1: "",
      locDistrict: "",
      rePassword: "",
      hideNav: true,
      isOpenDrawer: false,
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
  resize() {
    let currentHideNav = window.innerWidth <= 768;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

  }
  handleChangeCheckBox() {
    if (this.state.checked === false) {
      this.setState({
        checked: true,
        isDisabled: false,
      });
    } else {
      this.setState({
        checked: false,
      });
    }
  }
  handleSubmit() {
    const {
      firstName,
      lastName,
      email,
      password,
      tel,
      nationality,
      modePay1,
      accountNmbr1,
      locDistrict,
      rePassword,
    } = this.state;
    const { agentRegister } = this.props;
    agentRegister(
      firstName,
      lastName,
      email,
      password,
      tel,
      nationality,
      modePay1,
      accountNmbr1,
      locDistrict,
      rePassword
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidUpdate(prevProps) {
      if (this.props.isCreatedSuccess !== prevProps.isCreatedSuccess) {
        history.push("/booking-success");
      }
  }
  render() {
    const { classes } = this.props;

    return (
      <div className="join-staff-page">
        <div>
          {this.state.hideNav?(
            <div>
               <div>
          <AppBar
            position="fixed"

          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen.bind(this)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            <div style={{marginLeft:"15%"}}>
              Be one of our Agents
            </div>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={this.state.isOpenDrawer}

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
            </div>

          ):(<Navbar />)}
        </div>
       {this.state.hideNav?"":<div className="service-page-title">Become our agent</div>} 
        <div>
          <form className="staff-registration-form">
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              name="firstName"
              onChange={this.handleChange.bind(this)}
              className={classes.TextField}
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              name="lastName"
              onChange={this.handleChange.bind(this)}
              className={classes.TextField}
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              onChange={this.handleChange.bind(this)}
              className={classes.TextField}
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Telephone"
              name="tel"
              variant="outlined"
              onChange={this.handleChange.bind(this)}
              className={classes.TextField}
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Nationality"
              name="nationality"
              variant="outlined"
              onChange={this.handleChange.bind(this)}
              className={classes.TextField}
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="District"
              variant="outlined"
              name="locDistrict"
              onChange={this.handleChange.bind(this)}
              className={classes.TextField}
            />
            <Box m={2} />

            <Autocomplete
              id="combo-box-demo"
              options={paymentMode}
              getOptionLabel={(option) => option.paymentName}
              // style={{ width: 300 }}
              onChange={(e, value) => {
                this.setState({
                  modePay1: value.paymentName,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Mode of payment"
                  variant="outlined"
                  className={classes.TextField}
                />
              )}
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Account number"
              variant="outlined"
              name="accountNmbr1"
              onChange={this.handleChange.bind(this)}
              className={classes.TextField}
            />
            <Box m={2} />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              className={classes.TextField}
            />
            <Box m={2} />

            <TextField
              id="outlined-basic"
              label="Confirm password"
              variant="outlined"
              name="rePassword"
              type="password"
              onChange={this.handleChange.bind(this)}
              className={classes.TextField}
            />
            <Box m={2} />
            <div className="checkbox-container">
              <div>
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.handleChangeCheckBox.bind(this)}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </div>
              <div className="terms">I agree terms & conditions</div>
            </div>
            {this.props.messageError&&this.props.messageError?( <div className="error-message1">
                {this.props.messageError}
              </div>):""}
     
            <Box m={2} />
            <Button
              className={classes.Button}
              variant="contained"
              color="primary"
              disabled={this.state.isDisabled}
              onClick={this.handleSubmit.bind(this)}
            >
              Submit request
            </Button>
            <h3 style={{ color: "#737793" }}>
              Already have account ?
            

              <a href="/agent-login" style={{ color: "#3660fb"}} className="agent-login-link" >
                Login here
              </a>
             
            </h3>
          </form>
        </div>

        {this.state.hideNav?(
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
        ):(
          <>
          <Footer />
        </>
        )}
      </div>
    );
  }
}

const paymentMode = [
  { paymentName: "Bank" },
  { paymentName: "Mobile money" },
  { paymentName: "Paypal" },
];

export const mapStateToProps = (state) => {
  return {
    isCreatedSuccess: state.agentReducer.message,
    messageError: state.agentReducer.messageError,
  };
};
const connectedAgentPage = connect(mapStateToProps, {
  agentRegister,
  agentCreatedSuccess,
  agentCreatedFailure,
})(withStyles(Styles)(Agent));

export default connectedAgentPage;
