import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/login.css";
import TextField from "@material-ui/core/TextField";
import { Styles } from "../../styles/login";
import { withStyles } from "@material-ui/core/styles";
import profile from "../../assets/images/profile.png";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { createBrowserHistory } from "history";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {
  getImageSuccess,
  getImageError,
  signIn, 
  loginSuccess,
  loginFailure
} from "../../redux/actions/loginActions";

export const history = createBrowserHistory({
  forceRefresh: true
});
class LoginAdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: this.props.errorMessage ? this.props.errorMessage : "",
      open: this.props.errorMessage !== undefined?true:false,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    const password = this.state.password;
    const email = this.state.email;
    if (this.state.password === "" || this.state.email === "") {
      this.setState({
        errorMessage: "Please input field correct"
      });
    } else {
      const { signIn } = this.props;
      signIn(email, password);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.successMessage !== prevProps.successMessage) {
      history.push("/dashboard");
    }
  }
  handleClose() {
    this.setState({
      open: false
    });
  }

  handleChange(event) {
    this.setState({
      open: false
    });
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="loginContainer">
        {this.state.errorMessage !== '' ? (
          <Snackbar
            open={true}
            autoHideDuration={2000}
            onClose={this.handleClose.bind(this)}
            className={classes.Snackbar}
          >
            <Alert onClose={this.handleClose.bind(this)} severity="error">
              {this.state.errorMessage}
            </Alert>
          </Snackbar>
        ) : null}
        <div className="formContainer">
          <div className="photoContainer">
              <img className="image" src={profile} alt="profile" />
           
          </div>

          <div className="formHolder">
            <header>
              <h4>ADMIN DASHBOARD</h4>
              <p>Welcome again Login to continue</p>
            </header>
            <Box m={4} />
            <form onSubmit={this.handleSubmit.bind(this)}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="filled"
                name="email"
                className={classes.inputField}
                onChange={this.handleChange.bind(this)}
              ></TextField>
              <Box m={2} />
              <TextField
                id="outlined-basic"
                label="Password"
                name="password"
                variant="filled"
                type="password"
                className={classes.inputField}
                onChange={this.handleChange.bind(this)}
              ></TextField>
              <Box m={4} />
              <Button
                className={classes.Button}
                onClick={this.handleSubmit.bind(this)}
              >
                Continue
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export const mapStateToProps = state => {
  return {
    image: state.loginReducer.image,
    imageError: state.loginReducer.imageError,
    successMessage: state.loginReducer.successMessage,
    errorMessage: state.loginReducer.errorMessage
  };
};

const connectedLoginAdminDashboard = connect(mapStateToProps, {
  getImageSuccess,
  getImageError,
  signIn,
  loginSuccess,
  loginFailure
})(withStyles(Styles)(LoginAdminDashboard));

export default connectedLoginAdminDashboard;