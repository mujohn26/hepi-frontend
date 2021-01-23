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
import AddressHelper from "../../helpers/address.helper";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {LinearProgress,} from '@material-ui/core';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  staffRegistrationRequest,
  staffRegistrationSuccess,
  staffRegistrationFailure,
  uploadNewImageOnCloud,
} from "../../redux/actions/staffActions";
import UploadImage from "../../components/common/uploadImage.jsx";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory({
  forceRefresh: true,
});
class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      province: "",
      checked: false,
      districts: [],
      sectors: [],
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      nationality: "",
      educationLevel: "",
      licence: "",
      locProvince: "",
      locDistrict: "",
      locSector: "",
      bio: "",

    };
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
  handleSubmitRequest() {
   const photo = this.props.images!==undefined?this.props.images[0].imageUrl:null
    const {
      firstName,
      lastName,
      email,
      tel,
      nationality,
      educationLevel,
      licence,
      locProvince,
      locDistrict,
      locSector,
      bio,
      services,
    } = this.state;
    const { staffRegistrationRequest } = this.props;
    staffRegistrationRequest(
      firstName,
      lastName,
      email,
      tel,
      nationality,
      educationLevel,
      licence,
      locProvince,
      locDistrict,
      locSector,
      bio,
      services,
      photo
    );
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  shouldBeDisabled() {
    if (this.state.checked === false) {
      return true;
    }
    return false;
  }
  handleChangeCheckBox() {
    if (this.state.checked === false) {
      this.setState({
        checked: true,
      });
    } else {
      this.setState({
        checked: false,
      });
    }
  }
  handleDelete = (index) => {
    this.state.services.splice(this.state.services.indexOf(index), 1);
  };
  componentDidUpdate(prevProps) {
    if (this.props.registrationMessage !== prevProps.registrationMessage) {
      history.push("/staff-success");
    }
  }

  uploadUserImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "barefootnomad");

    this.props.uploadNewImageOnCloud(data);
  };
  handleDeleteAccommodation = (key) => {
    this.props.images.splice(key, 1);
    this.props.handleDeleteAccommodation(this.props.images);
    this.setState({
      deleted: true,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="join-staff-page">
        <div>
          <Navbar />
        </div>
        <div className="service-page-title">Join us</div>
        <div>
          <form className="staff-registration-form">
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              className={classes.TextField}
              name="firstName"
              onChange={this.handleChange.bind(this)}
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              className={classes.TextField}
              name="lastName"
              onChange={this.handleChange.bind(this)}
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.TextField}
              name="email"
              onChange={this.handleChange.bind(this)}
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="Tel"
              variant="outlined"
              className={classes.TextField}
              name="tel"
              onChange={this.handleChange.bind(this)}
            />
            <Box m={2} />
            <Autocomplete
              id="combo-box-demo"
              options={educatiolLevels}
              getOptionLabel={(option) => option.levelName}
              style={{ width: 300 }}
              onChange={(e, value) => {
                this.setState({
                  educationLevel: value.levelName,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Education level"
                  variant="outlined"
                  className={classes.TextField}
                />
              )}
            />
            <Box m={2} />
            <TextField
              id="outlined-basic"
              label="license number"
              variant="outlined"
              className={classes.TextField}
              name="licence"
              onChange={this.handleChange.bind(this)}
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
                      locProvince: value.provinceName,
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
                      locDistrict: value.districtName,
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
                  style={{ width: 300 }}
                  onChange={(e, value) => {
                    this.setState({
                      locSector: value.sectorName,
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
              options={services}
              getOptionLabel={(option) => option.serviceName}
              onChange={(e, value) => {
                const myArray = this.state.services;
                myArray.push({
                  serviceName: value.serviceName,
                });
                this.setState({
                  services: myArray,
                });
              }}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Please select services you can offer"
                  variant="outlined"
                  className={classes.TextField}
                />
              )}
            />
            <Box m={2} />
            <div className="chip-container">
              {this.state.services.map((service, index) => {
                return (
                  <>
                    <Chip
                      label={service.serviceName}
                      onDelete={() => {
                        this.handleDelete(index);
                      }}
                      className={classes.chip}
                    />
                  </>
                );
              })}
            </div>
            <Box m={2} />
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={16}
              placeholder="Biography"
              className={classes.TextArea}
              name="bio"
              onChange={this.handleChange.bind(this)}
            />{" "}
            <Box m={2} />
            <UploadImage uploadImage={this.uploadUserImage} />
            <Box m={2} />
            <div className={classes.Chip}>
              {this.props.images &&
                this.props.images.map((data, index) => {
                  return (
                    <>
                      <Chip
                        data-test="accommodation-image-chip-small"
                        style={{ marginTop: "2px", marginLeft: "2px" }}
                        label="Profile"
                        onDelete={() => {
                          this.handleDeleteAccommodation(data.key);
                        }}
                        className={classes.chip}
                      />
                    </>
                  );
                })}
            </div>
            <Box hidden={!this.props.isImageUploading} className={classes.Progress}> <LinearProgress/> </Box>
            <div>
                <div>Terms & conditions:</div>
                <div style={{marginTop:"20px"}}>- Having vital sign materials</div>
              </div>
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
              onClick={this.handleSubmitRequest.bind(this)}
              disabled={this.shouldBeDisabled()}
            >
              Submit request
            </Button>
            <Box m={2} />
            {/* <Box hidden={!this.props.isLoading} className={classes.Progress}> <LinearProgress /> </Box> */}
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const educatiolLevels = [
  { levelName: "Phd" },
  { levelName: "Masters" },
  { levelName: "Bachelor" },
  { levelName: "Diploma" },
  { levelName: "High school" },
];
const provinces = [
  { provinceName: "Kigali" },
  { provinceName: "West" },
  { provinceName: "East" },
  { provinceName: "North" },
  { provinceName: "South" },
];
const services = [
  { serviceName: "flight nurse" },
  { serviceName: "family care nurse" },
  { serviceName: "traveling nurse" },
  { serviceName: "hotels nurse" },
  { serviceName: "midwife" },
  { serviceName: "mental health nurse" },
  { serviceName: "psychologist" },
  { serviceName: "dental" },
  { serviceName: "reflexiologist" },
  { serviceName: "nutritionist" },
  { serviceName: "hygienist" },
  { serviceName: "Community health works officer" },
  { serviceName: "public health officer" },
  { serviceName: "lab tech" },
];

export const mapStateToProps = (state) => {

  return {
    registrationMessage: state.staffReducer.message,
    images: state.staffReducer.images,
    isLoading:state.staffReducer.isLoading,
    isImageUploading: state.staffReducer.isImageUploading
  };
};
const connectedStaffRegistrationPage = connect(mapStateToProps, {
  staffRegistrationRequest,
  staffRegistrationSuccess,
  staffRegistrationFailure,
  uploadNewImageOnCloud,
})(withStyles(Styles)(Join));

export default connectedStaffRegistrationPage;
