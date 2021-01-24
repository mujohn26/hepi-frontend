import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../common/navbar";
import "../../styles/booking.css";
import "../../styles/service.css";
import Footer from "../common/Footer";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "../../styles/service";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import AddressHelper from "../../helpers/address.helper";
import DateFnsUtils from "@date-io/date-fns";
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
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  bookingRequest,
  bookingRequestSuccess,
  bookingRequestFailure,
  getServices,
  getServicesPricingSuccess,
  getServicesPricingFailure,
} from "../../redux/actions/bookingActions";
import queryString from 'query-string'
import { createBrowserHistory } from "history";
export const history = createBrowserHistory({
  forceRefresh: true,
});
class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      checked: false,
      districts: [],
      sectors: [],
      province: "",
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      sector: "",
      district: "",
      service: "",
      duration: "",
      hours: "",
      days: "",
      paymentMethod: "",
      agentCode:"",
      selectedDate: new Date("2021-01-31"),
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
    const params = queryString.parse(window.location.search);
    this.setState({
      agentCode:params.agentCode
    });
    const { getServices } = this.props;
    getServices();
  }

  getDistricts = (provinceName) => {
    this.state.districts.splice(0, this.state.districts.length);
    const address = AddressHelper.getDistrict(provinceName);
    address.map((addres, index) => {
      this.state.districts.push({ districtName: addres });
    });
  };
  getSectors = (districtName) => { 
    this.state.sectors.splice(0, this.state.sectors.length);
    const address = AddressHelper.getSector(this.state.province, districtName);
    address.map((addres, index) => {
      this.state.sectors.push({ sectorName: addres });
    });
  };
  handleDateChange = (date) => {
    this.setState({
      selectedDate: date,
    });
  };
  handleSubmitRequest() {
    const {
      firstName,
      lastName,
      email,
      province,
      district,
      sector,
      service,
      paymentMethod,
      duration,
      hours,
      days,
      agentCode
      
    } = this.state;
    const tel = this.state.telephone;
    const startDate = this.state.selectedDate;
    const { bookingRequest } = this.props;
    bookingRequest(
      firstName,
      lastName,
      email,
      tel,
      province,
      district,
      sector,
      service,
      startDate,
      paymentMethod,
      duration,
      hours,
      days,
      agentCode
    );
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.requestMessage !== prevProps.requestMessage) {
      history.push("/booking-success");
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <div className="booking-page">
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
            Book one of our specialist
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
        {this.state.hideNav?"":<div className="service-page-title">Book one of our specialist</div>} 
        <div>
          <form className="staff-registration-form">
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              className={classes.TextField}
              onChange={this.handleChange.bind(this)}
              name="firstName"
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              className={classes.TextField}
              onChange={this.handleChange.bind(this)}
              name="lastName"
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.TextField}
              onChange={this.handleChange.bind(this)}
              name="email"
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Telephone"
              variant="outlined"
              className={classes.TextField}
              onChange={this.handleChange.bind(this)}
              name="telephone"
            />
                        <Box m={2} />
            <TextField
              id="outlined-basic"
              label="agent code"
              variant="outlined"
              value={this.state.agentCode == ''?'':this.state.agentCode}
              className={classes.TextField}
              onChange={this.handleChange.bind(this)}
              name="agentCode"
            />
            <Box m={2} />
            <div className="address-container">
              <div>
                <Autocomplete
                  id="combo-box-demo"
                  options={provinces}
                  getOptionLabel={(option) => option.provinceName}
                  onChange={(e, value) => {
                    this.setState({
                      province: value.provinceName,
                    });
                    this.getDistricts(value.provinceName);
                  }}
                  // style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Province"
                      variant="outlined"
                      className={classes.AdressTextField1}
                    />
                  )}
                />
              </div>
              <div>
                <Autocomplete
                  id="combo-box-demo"
                  options={this.state.districts}
                  getOptionLabel={(option) => option.districtName}
                  onChange={(e, value) => {
                    this.setState({
                      district: value.districtName,
                    });
                    this.getSectors(value.districtName);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="District"
                      variant="outlined"
                      className={classes.AdressTextField2}
                    />
                  )}
                />
              </div>
              <div>
                <Autocomplete
                  id="combo-box-demo"
                  options={this.state.sectors}
                  getOptionLabel={(option) => option.sectorName}
                  // style={{ width: 300 }}
                  onChange={(e, value) => {
                    this.setState({
                      sector: value.sectorName,
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Sector"
                      variant="outlined"
                      className={classes.AdressTextField3}
                    />
                  )}
                />
              </div>
            </div>
            <Box m={2} />

            <Autocomplete
              id="combo-box-demo"
              options={this.props.services && this.props.services}
              getOptionLabel={(option) => option.serviceName}
              onChange={(e, value) => {
                this.setState({
                  service: value.serviceName,
                });
              }}
              // style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Please select service you need"
                  variant="outlined"
                  className={classes.TextField}
                />
              )}
            />
            <Box m={2} />
            {this.state.service !== "" ? (
              <Autocomplete
                id="combo-box-demo"
                options={duration}
                getOptionLabel={(option) => option.durationName}
                onChange={(e, value) => {
                  this.setState({
                    duration: value.durationName,
                  });
                }}
                // style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Please select duration"
                    variant="outlined"
                    className={classes.TextField}
                  />
                )}
              />
            ) : (
              ""
            )}
            <Box m={2} />

            {this.state.duration !== "" ? (
              <TextField
                id="outlined-basic"
                label="How many hours per day"
                variant="outlined"
                className={classes.TextField}
                onChange={this.handleChange.bind(this)}
                name="hours"
              />
            ) : (
              ""
            )}
            <Box m={2} />

            {this.state.hours !== "" ? (
              <TextField
                id="outlined-basic"
                label="How many days"
                variant="outlined"
                className={classes.TextField}
                onChange={this.handleChange.bind(this)}
                name="days"
              />
            ) : (
              ""
            )}
            <Box m={2} />
            <Autocomplete
              id="combo-box-demo"
              options={paymentMode}
              getOptionLabel={(option) => option.paymentName}
              // style={{ width: 300 }}
              onChange={(e, value) => {
                this.setState({
                  paymentMethod: value.paymentName,
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={classes.TextField}
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-dialog"
                label="Start date"
                value={this.state.selectedDate}
                onChange={(e, value) => {
                  this.handleDateChange(value);
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>

            <Box m={2} />
            <Button
              className={classes.Button}
              variant="contained"
              color="primary"
              onClick={this.handleSubmitRequest.bind(this)}
            >
              Submit request
            </Button>
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
              marginTop:"5%"

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

const provinces = [
  { provinceName: "Kigali" },
  { provinceName: "West" },
  { provinceName: "East" },
  { provinceName: "North" },
  { provinceName: "South" },
];
const duration = [
  { durationName: "Full-day" },
  { durationName: "Night" },
  { durationName: "Day" },
];

const paymentMode = [
  { paymentName: "Bank" },
  { paymentName: "Mobile money" },
  { paymentName: "Paypal" },
];

export const mapStateToProps = (state) => {
  return {
    requestMessage: state.bookingReducer.message,
    services: state.bookingReducer.data,
  };
};
const connectedBookingPage = connect(mapStateToProps, {
  bookingRequest,
  bookingRequestSuccess,
  bookingRequestFailure,
  getServices,
  getServicesPricingSuccess,
  getServicesPricingFailure,
})(withStyles(Styles)(Booking));

export default connectedBookingPage;
