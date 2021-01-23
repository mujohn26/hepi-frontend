import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { connect } from "react-redux";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";

const style = {
  borderRadius: "50%",
  height: "20px",
  width: "20px",
  backgroundColor: "#0094FF",
  display: "grid",
  justifyItems: "center",
  fontSize: "12px",
  alignItems: "center",
  color: "#FFF",
  float: "right",
};

export class TopNavBar extends Component {
  state = {
    notificationCounter: 0,
    notification: "",
  };

  render() {
    return (
      <>
        <Box width={30 / 100} display="flex" justifyContent="flex-end">
          <Box pr={1} style={{ marginTop: "10px" }}>
         <img
								src='https://res.cloudinary.com/dby88h516/image/upload/v1580893608/email_1_jupvlq.svg'
								width='100%'
								height='24px'
							/> 
            {/* <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge> */}
          </Box>
          <Box pl={1} style={{ marginTop: "10px" }}>
      
            <div>Hello</div>
         
          </Box>
        </Box>
      </>
    );
  }
}

export default TopNavBar;
