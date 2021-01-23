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
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  bookingRequest,
  bookingRequestSuccess,
  bookingRequestFailure,
  getServicesPricingSuccess,
  getServicesPricingFailure,
} from "../../redux/actions/mperekezaActions";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory({
  forceRefresh: true,
});
class Mperekeza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      checked: false,
      districts: [],
      sectors: [],
      cell: "",
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      sector: "",
      district: "",
      service: "",
      duration: "",
      hours: "",
      visits: "",
      paymentMethod: "",
      agentCode:"",
      startDate: new Date("2020-10-31"),
    };
  }

  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleSubmitRequest() {
    const {
      firstName,
      lastName,
      province,
      district,
      sector,
      cell,
      email,
      startDate,
      service,
      visits,
      agentCode
    } = this.state;
    const tel = this.state.telephone;
    const { bookingRequest } = this.props;
    bookingRequest(
      firstName,
      lastName,
      province,
      district,
      sector,
      cell,
      email,
      startDate,
      service,
      visits,
      tel,
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
          <Navbar />
        </div>
        <div className="booking-page-title">
          Subscribe to our mperekeza program
        </div>
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
            <div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="District"
                  variant="outlined"
                  className={classes.TextField}
                  onChange={this.handleChange.bind(this)}
                  name="district"
                />
              </div>
              <Box m={2} />
              <div>
                <TextField
                  id="outlined-basic"
                  label="Sector"
                  variant="outlined"
                  className={classes.TextField}
                  onChange={this.handleChange.bind(this)}
                  name="sector"
                />
              </div>
              <Box m={2} />
              <div>
                <TextField
                  id="outlined-basic"
                  label="Cell"
                  variant="outlined"
                  className={classes.TextField}
                  onChange={this.handleChange.bind(this)}
                  name="cell"
                />
              </div>
            </div>
            <Box m={2} />

            <Autocomplete
              id="combo-box-demo"
              options={services}
              getOptionLabel={(option) => option.serviceName}
              onChange={(e, value) => {
                this.setState({
                  service: value.serviceName,
                });
              }}
              style={{ width: 300 }}
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

            <TextField
              id="outlined-basic"
              label="Number of visits per month"
              variant="outlined"
              className={classes.TextField}
              onChange={this.handleChange.bind(this)}
              name="visits"
            />
            <Box m={2} />

            <TextField
              id="outlined-basic"
              label="agent code"
              variant="outlined"
              className={classes.TextField}
              onChange={this.handleChange.bind(this)}
              name="agentCode"
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
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const services = [
  { serviceName: "Status" },
  { serviceName: "NCDs" },
  { serviceName: "Epilepsy" },
  { serviceName: "Diabetics" },
  { serviceName: "Asthma" },
  { serviceName: "Cancer" },
  { serviceName: "Post partum " },
  { serviceName: "Disability " },
  { serviceName: "Other" },
];
export const mapStateToProps = (state) => {
  return {
    requestMessage: state.mperekezaReducer.message,
    services: state.mperekezaReducer.data,
  };
};
const connectedMperekezaPage = connect(mapStateToProps, {
  bookingRequest,
  bookingRequestSuccess,
  bookingRequestFailure,
  getServicesPricingSuccess,
  getServicesPricingFailure,
})(withStyles(Styles)(Mperekeza));

export default connectedMperekezaPage;
