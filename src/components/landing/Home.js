import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/home.css";
import Header from "../common/Header";
import Navbar from "../common/navbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "../../styles/Home";
import userPic from "../../assets/images/logo.png";
import nursePic from "../../assets/images/doctor.png";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import ItemsCarousel from "react-items-carousel";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
import HomeMobileView from './homeMobile';
import { createBrowserHistory } from "history";
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
    };
  }

  resize() {
    let currentHideNav = window.innerWidth <= 768;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
  }
  handleClickCourse = (id) => {
    this.setState({
      courseId: id,
    });
  };
  isSelected = (id) => {
    return id == this.state.courseId;
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    const { getTestimonials, getStaffs } = this.props;
    getTestimonials();
    getStaffs();
  }
  makeBooking() {
    history.push("/booking");
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="home-container">
        {this.state.hideNav?(<div><HomeMobileView/></div>):
        (
          <div>
        <div className="upper-container">
          <div>
            <Navbar />
          </div>
          <div className="upper-main-container">
            <div className="search-section-container">
              <div className="services-description">
                <div className="services-title">
                  Health escort patient initiative it's an online platform which
                  gives health care assistance in the following services
                </div>
                <div>
                  <Timeline align="alternate">
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography color="textSecondary">
                          Escort nurse
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography color="textSecondary">
                          Flight nurse
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography color="textSecondary">
                          Home and family nurse
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography color="textSecondary">
                          Psychologist
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography color="textSecondary">
                          Travelling nurse
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography color="textSecondary">Midwife</Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography color="textSecondary">
                          Nutritionist
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography color="textSecondary">
                          Public health worker
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </div>
              </div>
              <div className="request-button-container">
                <div className="search-section-title">
                  <div>Find a nurse and book online</div>
                  {/* <div style={{ marginLeft: "20%" }}>& book online</div> */}
                </div>
                <div className="search-section-main">
                  <div className="search-main-section-title">
                    Easily book a nurse or a doctor anywhere in Rwanda
                  </div>

                  <div>
                    <Button
                      className={classes.Button}
                      variant="contained"
                      color="primary"
                      onClick={this.makeBooking.bind(this)}
                    >
                      Make a request
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="nurse-photo-container">
              <img src={nursePic} alt="nurse pic" className="nurse-photo" />
            </div>
          </div>
        </div>
        <div className="stats-section">
          <div className="stats-left-section">
            <div className="stats-left-section-title">Our staff and Testimonials</div>
            <div className="stats-left-section-sub-title">
              Easily book a nurse or a doctor anywhere in Rwanda
            </div>
          </div>
          <div className="stats-right-section">
            <div className="stats-right-section-title">
              we have served patients
            </div>
            <div className="stats-right-section-info">15+ Patients</div>
          </div>
        </div>
        {/* end of Navbar main header section */}
        <div>
          <ItemsCarousel
            infiniteLoop={false}
            gutter={20}
            activePosition={"center"}
            chevronWidth={12}
            disableSwipe={false}
            alwaysShowChevrons={false}
            numberOfCards={3}
            slidesToScroll={1}
            outsideChevron={true}
            showSlither={false}
            firstAndLastGutter={false}
            activeItemIndex={this.state.activeItemIndex}
            requestToChangeActive={(value) => {
              return this.setState({ activeItemIndex: value });
            }}
            rightChevron={<ArrowForwardIcon />}
            leftChevron={<ArrowBackIcon />}
            className="itemsCoursel"
          >
            {this.props.staffData &&
              this.props.staffData.map((data, index) => {
                if (this.props.staffData[index].photo != null) {
                  return (
                    <div
                      style={{
                        width: "335px",
                        height: "350px",
                      }}
                      key={index}
                      class="staff-card"
                    >
                      <div className="staff-img-container">
                        <img
                          src={this.props.staffData[index].photo}
                          alt="user pic"
                          className="staff-user-img"
                        />
                      </div>
                      <div className="staff-home-txt-container">
                        <div className="staff-home-name" >
                          Name: {this.props.staffData[index].firstName}{" "}
                          {this.props.staffData[index].lastName}
                        </div>
                        <div>
                          Location:{this.props.staffData[index].locDistrict}
                        </div>
                      </div>
                      <div>
                        <Button
                          className={classes.StaffButton}
                          variant="contained"
                          color="primary"
                          onClick={this.makeBooking.bind(this)}
                        >
                          Book now
                        </Button>
                      </div>
                    </div>
                  );
                }
              })}
          </ItemsCarousel>
        </div>
        <div className="testimonials-section-container">
          {this.props.testimonials &&
            this.props.testimonials.map((testimonial, index) => {
              if (index <= 2) {
                return (
                  <div className="testimonials-section">
                    <div className="testimonial-upper-section">
                      <div className="testimonial-img-container">
                        <img
                          src={userPic}
                          alt="user pic"
                          className="testimonial-user-img"
                        />
                      </div>
                      <div className="testimonial-section-usernames">
                        {testimonial.name}
                      </div>
                    </div>
                    <div className="testimonial-message">
                      "{testimonial.message}"
                    </div>
                  </div>
                );
              }
            })}
        </div>
        <div>
          <Footer />
        </div>
        </div>

          )}
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
