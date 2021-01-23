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
import { Link } from "react-router-dom";
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
    };
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
      if (this.props.requestMessage !== prevProps.requestMessage) {
        history.push("/booking-success");
      }
  }
  render() {
    const { classes } = this.props;

    return (
      <div className="join-staff-page">
        <div>
          <Navbar />
        </div>
        <div className="service-page-title">Become our agent</div>
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
              style={{ width: 300 }}
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
              onChange={this.handleChange.bind(this)}
              className={classes.TextField}
            />
            <Box m={2} />

            <TextField
              id="outlined-basic"
              label="Confirm password"
              variant="outlined"
              name="rePassword"
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

        <div>
          <Footer />
        </div>
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
    isCreatedFailure: state.agentReducer.messageError,
  };
};
const connectedAgentPage = connect(mapStateToProps, {
  agentRegister,
  agentCreatedSuccess,
  agentCreatedFailure,
})(withStyles(Styles)(Agent));

export default connectedAgentPage;
