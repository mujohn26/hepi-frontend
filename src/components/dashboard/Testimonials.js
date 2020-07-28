import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import { Styles } from "../../styles/request";
import { createBrowserHistory } from "history";
import "../../styles/request.css";
import {
    getAllTestimonials,
  getAllRequestSuccess, 
  getAllRequestFailure,
  getRequestByStatus,
  acceptRequest,
  changeStatusSuccessfully,
} from "../../redux/actions/testimonialDashboardActions";
 
export const history = createBrowserHistory({
  forceRefresh: true,
});

export class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsPerPage: 5,
      page: 0,
      open: false,
      openModal: false,
    };
  }
  componentDidMount() {
    const { getAllTestimonials } = this.props;
    getAllTestimonials();
  }
  handleChangePage(event, newPage) {
    this.setState({
      page: newPage,
    });
  }
  handleAccept=(row)=>{
    const {id} =row;
    const displayType =  true;
    const { acceptRequest } = this.props;
    acceptRequest(id,displayType);

  }

  handleDecline=(row)=>{
    const {id} =row;
    const displayType =  false;
    const { acceptRequest } = this.props;
    acceptRequest(id,displayType);

  }


  handleFinish=(row)=>{
    const subscriptionId =row.id;
    const { finishRequest } = this.props;
    finishRequest(subscriptionId);
  }
  handleChangeRowsPerPage(event) {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  }
  handleCloseModal() {
    this.setState({
      openModal: false,
    });
  }
  handleClose() {
    this.setState({
      openSnackBar: false,
    });
  }
  componentDidUpdate(prevProps) {
		if (this.props.updateMessage !== prevProps.updateMessage) {
      const { getAllTestimonials } = this.props;
      getAllTestimonials();
		}
	}

  render() {
    const { classes } = this.props;
    const emptyRows =
      this.state.rowsPerPage -
      Math.min(
        this.state.rowsPerPage,
        (this.props.hospitals ? this.props.hospitals.length : 0) -
          this.state.page * this.state.rowsPerPage
      );
    return (
      <div className="requests-container">
        <div className="requests-title">View all testimonials</div>
        <div className="table-section-container">
          <div className="category-section">
            <div  style={{cursor:'pointer'}} className='category-menu1'>All</div>
            <div  style={{cursor:'pointer'}} className='category-menu2'>Pending</div>
            <div  style={{cursor:'pointer'}} className='category-menu3'>Progress</div>
            <div style={{cursor:'pointer'}} className='category-menu4'>Finished</div>
          </div>
          <div>
            <Paper className={classes.paper}>
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  aria-label="enhanced table"
                  size="small"
                >
                  <TableHead className={classes.tableHeader}>
                    <TableRow>
                      <TableCell align="left" className={classes.tableCell}>
                        Name
                      </TableCell>
                      <TableCell align="left" className={classes.tableCell}>
                        Email
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        Message
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        Status
                      </TableCell> 
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      ></TableCell>
                                            <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      ></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {this.props.requestData !==undefined
                      ? this.props.requestData
                          .slice(
                            this.state.page * this.state.rowsPerPage,
                            this.state.page * this.state.rowsPerPage +
                              this.state.rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.id}
                                padding="checkbox"
                                style={{ cursor: "pointer" }}
                              >
                                <TableCell
                                  component="th"
                                  scope="row"
                                  className={classes.tableCellContainer}
                                >
                                  {/* <span className="nameInitial">
                                    {row.name.charAt(0)}
                                  </span> */}
                                  {row.name} 
                                </TableCell>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  className={classes.tableCellContainer}
                                >
                    
                                  {row.email}
                                </TableCell>
                         

                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.message}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                  // style={
                                  //   row.display === false
                                  //     ? { color: "green" }
                                  //     :{ color: "yellow" }
                                  // }
                                >
                                  {row.display}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.display === 0? (
                                    <input
                                      id="openDialog"
                                      type="button"
                                      value="Accept"
                                      className="transparentBtn"
                                      onClick={() => this.handleAccept(row)}
                                      test-id="openModal"
                                    />
                                  ) : (
                                    <input
                                      id="openDialog"
                                      type="button"
                                      value="Decline"
                                      className="transparentBtn"
                                         onClick={() => this.handleDecline(row)}
                                      test-id="openModal"
                                      disabled="true"
                                    />
                                  )}
                                </TableCell>
                              </TableRow>
                            );
                          })
                      : null}
                    {emptyRows > 0 && (
                      <TableRow>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Grid container>
                <Grid item xs={12}>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={
                      this.props.requestData ? this.props.requestData.length : 0
                    }
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage.bind(this)}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(
                      this
                    )}
                  />
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
export const mapStateToProps = (state) => {
  return {
    requestData: state.testimonialsDashboardReducer.data,
    updateMessage:state.testimonialsDashboardReducer.message
  };
};
const connectedTestimonialsPage = connect(mapStateToProps, {
  getAllTestimonials,
  getAllRequestSuccess, 
  getAllRequestFailure,
  getRequestByStatus,
  acceptRequest,
  changeStatusSuccessfully,
})(withStyles(Styles)(Testimonials));

export default connectedTestimonialsPage;
