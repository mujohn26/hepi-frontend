import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/contact.css";
import Navbar from "../common/navbar";
import Footer from "../common/Footer";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "../../styles/contact";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import {
  addTestimonials,
  addTestimonialSuccess,
  addTestimonialFailure,
} from "../../redux/actions/TestimonialsAction";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory({
  forceRefresh: true,
});

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  handleSubmitTestimonials() {
    const { name, email, message } = this.state;
    const { addTestimonials } = this.props;
    addTestimonials(name, email, message);
  }
  
  handleChange(event) {
    console.log('=-=-=-=-=-=-=->>>',event.target.value);
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
      <div className="contact-us-page">
        <div>
          <Navbar />
        </div>
        <div className="contact-us-page-title">
          Please give us testimonials
        </div>
        <Box m={3} />
        <div>
          <form className="contact-us-form">
            <div className="contact-us-form-title">Please fill this form</div>
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className={classes.TextField}
              onChange={this.handleChange.bind(this)}
              name="name"
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
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={16}
              placeholder="Message"
              className={classes.TextArea}
              onChange={this.handleChange.bind(this)}
              name="message"
            />
            <Box m={2} />
            <Button
              className={classes.Button}
              variant="contained"
              color="primary"
              onClick={this.handleSubmitTestimonials.bind(this)}
            >
              Send
            </Button>
          </form>
        </div>
        <Box m={4} />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    requestMessage: state.testimonialReducer.message,
    services: state.testimonialReducer.data,
  };
};

const connectedTestimonialsPage = connect(mapStateToProps, {
  addTestimonials,
  addTestimonialSuccess,
  addTestimonialFailure,
})(withStyles(Styles)(Testimonials));

export default connectedTestimonialsPage;
