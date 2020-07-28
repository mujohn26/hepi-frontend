import React, { Component } from "react";
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

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      checked: false,
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <div className="contact-us-page">
        <div>
          <Navbar />
        </div>
        <div className="contact-us-page-title">
          Need assistance ? contact us
        </div>
        <Box m={3} />
        <div>
          <form  className="contact-us-form">
            <div className='contact-us-form-title'>Please fill this form</div>
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Names"
              variant="outlined"
              className={classes.TextField}
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.TextField}
            />
            <Box m={2} />
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={16}
              placeholder="Message"
              className={classes.TextArea}
            />
            <Box m={2} />
            <Button
                      className={classes.Button}
                      variant="contained"
                      color="primary"
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

export default withStyles(Styles)(Contact);
