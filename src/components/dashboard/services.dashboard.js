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
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { Styles } from "../../styles/request";
import { createBrowserHistory } from "history";
import AddAdminIcon from "../../assets/images/addIcon.png";
import "../../styles/request.css";
import {
    getAllServices,
    getAllServicesSuccess,
  getAllStaffFailure,
  createService
} from "../../redux/actions/servicesAction";

export const history = createBrowserHistory({
  forceRefresh: true,
});

export class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsPerPage: 5,
      page: 0,
      open: false,
      openModal: false,
      serviceName: "",
      price: "",
    };
  }
  componentDidMount() {
    const { getAllServices } = this.props;
    getAllServices();
  }
  handleSubmitRequest() {
    const { serviceName, price } = this.state;
    const { createService } = this.props;
    createService(serviceName, price);
  }
  getAllServices() {
    const { getAllServices } = this.props;
    getAllServices();
  }
  getActiveAdmins() {
    const { getAllByStatus } = this.props;
    const status = "active";
    getAllByStatus(status);
  }
  getInactiveAdmin() {
    const { getAllByStatus } = this.props;
    const status = "inactive";
    getAllByStatus(status);
  }
  handleChangePage(event, newPage) {
    this.setState({
      page: newPage,
    });
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
  handleOpenModal() {
    this.setState({
      openModal: true,
    });
  }
  handleClose() {
    this.setState({
      openSnackBar: false,
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.updateMessage !== prevProps.updateMessage) {
      const { getAllAdmins } = this.props;
      getAllAdmins();
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
        <div className="add-admin-title-container">
          {/* Start of modal section */}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.popUp}
            open={this.state.openModal}
            // onClose={this.handleCloseModal.bind(this)}
          >
            <div className={classes.modalService}>
              {this.props.isCreatedFailure === true ? (
                <Alert severity="error">
                  Oops error ocurred please try after some time{" "}
                </Alert>
              ) : (
                ""
              )}
              {this.props.isCreatedSuccess === true ? (
                <Alert severity="success">
                  Service was added successfully please close the modal and click view all view it!
                </Alert>
              ) : (
                ""
              )}
              <div>
                <CloseIcon
                  className={classes.CloseIcon}
                  onClick={this.handleCloseModal.bind(this)}
                />
              </div>
              <div className="modal-title">
                Fill in the details to add a service
              </div>
              <div className="modal-form-container">
                <form>
                  <TextField
                    id="outlined-basic"
                    label="Service name"
                    variant="outlined"
                    className={classes.TextField}
                    name="serviceName"
                    onChange={this.handleChange.bind(this)}
                  />
                  <Box m={2} />
                  <TextField
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    className={classes.TextField}
                    name="price"
                    onChange={this.handleChange.bind(this)}
                  />
                  <Box m={2} />
                  <Button
                    className={classes.Button}
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmitRequest.bind(this)}
                    // disabled={this.shouldBeDisabled()}
                  >
                    Create service
                  </Button>
                </form>
              </div>
            </div>
          </Modal>
          {/* End of modal section */}
          <div className="requests-title">View all Services</div>
          <div className="add-admin-container">
            <div onClick={this.handleOpenModal.bind(this)} className="add-icon">
              <img src={AddAdminIcon} alt="add admin icon" />
            </div>
            <div>Add Service</div>
          </div>
        </div>
        <div className="table-section-container">
        <div className="category-section">
            <div
              onClick={this.getAllServices.bind(this)}
              style={{ cursor: "pointer" }}
              className="category-menu1"
            >
              All
            </div>
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
                        Service name
                      </TableCell>
                      <TableCell align="left" className={classes.tableCell}>
                        price
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      ></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {this.props.servicesData
                      ? this.props.servicesData
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
                                    {row.serviceName.charAt(0)}
                                  </span>
                                  {row.serviceName}
                                </TableCell>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  className={classes.tableCellContainer}
                                >
                                  {row.price} Rwf
                                </TableCell>

                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  
                                    <input
                                      id="openDialog"
                                      type="button"
                                      value="Edit"
                                      className="transparentBtn"
                                      onClick={() =>
                                        this.handleDeactivateAdmin(row)
                                      }
                                      test-id="openModal"
                                    />
                               
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
                      this.props.servicesData ? this.props.servicesData.length : 0
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
    servicesData: state.servicesReducer.data,
    updateMessage: state.servicesReducer.message,
    isCreatedSuccess: state.servicesReducer.isCreatedSuccess,
    isCreatedFailure: state.servicesReducer.isCreatedFailure,
    isDeactivated: state.servicesReducer.isDeactivated,
  };
};
const connectedStaffPage = connect(mapStateToProps, {
    getAllServices,
    getAllServicesSuccess,
  getAllStaffFailure,
  createService
})(withStyles(Styles)(Staff));

export default connectedStaffPage;
