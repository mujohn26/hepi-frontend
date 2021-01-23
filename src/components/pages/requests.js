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
  getAllRequest,
  getAllRequestSuccess, 
  getAllRequestFailure,
  getRequestByStatus,
  getAllByStatus,
  acceptRequest,
  changeStatusSuccessfully,
  finishRequest
} from "../../redux/actions/requestActions";
 
export const history = createBrowserHistory({
  forceRefresh: true,
});

export class Request extends Component {
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
    const { getAllRequest } = this.props;
    getAllRequest();
  }
  getAllRequest(){
    const { getAllRequest } = this.props;
    getAllRequest();
  }
  getPendingRequest(){
    const { getAllByStatus } = this.props;
    const status ='not-started'
    getAllByStatus(status);
  }
  getProgressRequest(){
    const { getAllByStatus } = this.props;
    const status ='in-progress'
    getAllByStatus(status);
  }

  getFinishedRequest(){
    const { getAllByStatus } = this.props;
    const status ='finished'
    getAllByStatus(status);
  }
  handleChangePage(event, newPage) {
    this.setState({
      page: newPage,
    });
  }
  handleAccept=(row)=>{
    const requestId =row.id;
    const { acceptRequest } = this.props;
    acceptRequest(requestId);
  }
  handleFinish=(row)=>{
    const requestId =row.id;
    const { finishRequest } = this.props;
    finishRequest(requestId);
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
      const { getAllRequest } = this.props;
      getAllRequest();
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
        <div className="requests-title">View all requests</div>
        <div className="table-section-container">
          <div className="category-section">
            <div onClick={this.getAllRequest.bind(this)} style={{cursor:'pointer'}} className='category-menu1'>All</div>
            <div onClick={this.getPendingRequest.bind(this)} style={{cursor:'pointer'}} className='category-menu2'>Pending</div>
            <div onClick={this.getProgressRequest.bind(this)} style={{cursor:'pointer'}} className='category-menu3'>Progress</div>
            <div onClick={this.getFinishedRequest.bind(this)} style={{cursor:'pointer'}} className='category-menu4'>Finished</div>
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
                        Firstname
                      </TableCell>
                      <TableCell align="left" className={classes.tableCell}>
                        Lastname
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        Email
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        Phone number
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        Proposed staff
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        Service
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        Start date
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        Location
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
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {this.props.requestData
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
                                  <span className="nameInitial">
                                    {row.firstName.charAt(0)}
                                  </span>
                                  {row.firstName} 
                                </TableCell>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  className={classes.tableCellContainer}
                                >
                    
                                  {row.lastName}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.email}
                                </TableCell>

                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.tel}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  View
                                </TableCell>

                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.service}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                    {row.startDate}                                
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.sector}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.status}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.status === "not-started" ? (
                                    <input
                                      id="openDialog"
                                      type="button"
                                      value="Accept"
                                      className="transparentBtn"
                                      onClick={() => this.handleAccept(row)}
                                      test-id="openModal"
                                    />
                                  ) : row.status === "in-progress" ? (
                                    <input
                                      id="openDialog"
                                      type="button"
                                      value="Finish"
                                      className="transparentBtn"
                                         onClick={() => this.handleFinish(row)}
                                      test-id="openModal"
                                    />
                                  ) : (
                                    <input
                                      id="openDialog"
                                      type="button"
                                      value="Finished"
                                      className="transparentBtn"
                                      //    onClick={() => handleDeactivation(row)}
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
    requestData: state.requestReducer.data,
    updateMessage:state.requestReducer.message
  };
};
const connectedRequestPage = connect(mapStateToProps, {
  getAllRequest,
  getAllRequestSuccess,
  getAllRequestFailure,
  getRequestByStatus,
  getAllByStatus,
  acceptRequest,
  changeStatusSuccessfully,
  finishRequest
})(withStyles(Styles)(Request));

export default connectedRequestPage;
