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
  getAllAdmins,
  getAllAdminsSuccess,
  getAllStaffFailure,
  createAdmin,
  getAllByStatus,
  deactivateAdmin,
  activateAccount
} from "../../redux/actions/addAdminActions";

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
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      secretPassword: "",
    };
  }
  componentDidMount() {
    const { getAllAdmins } = this.props;
    getAllAdmins();
  }
  handleSubmitRequest() {
    const { firstName, lastName, email, secretPassword, tel } = this.state;
    const { createAdmin } = this.props;
    createAdmin(firstName, lastName, email, secretPassword, tel);
  }
  getAllStaff() {
    const { getAllAdmins } = this.props;
    getAllAdmins();
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
  handleDeactivateAdmin = (row) => {
    const userId = row.id;

    const { deactivateAdmin } = this.props;
    deactivateAdmin(userId);
  };
  handleActivate = (row) => {
    const userId = row.id;

    const { activateAccount } = this.props;
    activateAccount(userId);
  };
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
          {this.props.isDeactivated === true ? (
            <Snackbar open={true} autoHideDuration={6000}>
              <Alert severity="success">
                User was Deactivated successfully.
              </Alert>
            </Snackbar>
          ) : (
            ""                          
          )}
          {/* Start of modal section */}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.popUp}
            open={this.state.openModal}
            // onClose={this.handleCloseModal.bind(this)}
          >
            <div className={classes.modal}>
              {this.props.isCreatedFailure === true ? (
                <Alert severity="error">
                  Oops error ocurred please try after some time{" "}
                </Alert>
              ) : (
                ""
              )}
              {this.props.isCreatedSuccess === true ? (
                <Alert severity="success">
                  Admin was create successfully please close the modal!
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
                Fill in the details to create an Admin
              </div>
              <div className="modal-form-container">
                <form>
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
                    label="Telephone"
                    variant="outlined"
                    className={classes.TextField}
                    name="tel"
                    onChange={this.handleChange.bind(this)}
                  />
                  <Box m={2} />
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    className={classes.TextField}
                    name="secretPassword"
                    type="password"
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
                    Create admin
                  </Button>
                </form>
              </div>
            </div>
          </Modal>
          {/* End of modal section */}
          <div className="requests-title">View all Admins</div>
          <div className="add-admin-container">
            <div onClick={this.handleOpenModal.bind(this)} className="add-icon">
              <img src={AddAdminIcon} alt="add admin icon" />
            </div>
            <div>Add Admin</div>
          </div>
        </div>
        <div className="table-section-container">
          <div className="category-section">
            <div
              onClick={this.getAllStaff.bind(this)}
              style={{ cursor: "pointer" }}
              className="category-menu1"
            >
              All
            </div>
            <div
              onClick={this.getActiveAdmins.bind(this)}
              style={{ cursor: "pointer" }}
              className="category-menu3"
            >
              Active
            </div>
            <div
              onClick={this.getInactiveAdmin.bind(this)}
              style={{ cursor: "pointer" }}
              className="category-menu2"
            >
              Inactive
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
                        role
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        status
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      ></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {this.props.adminData
                      ? this.props.adminData
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
                                  {row.role}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                  style={
                                    row.status === "active"
                                      ? { color: "green" }
                                      : row.status === "pending"
                                      ? { color: "yellow" }
                                      : { color: "red" }
                                  }
                                >
                                  {row.status}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {
                                  row.status === "deactive" ? (
                                    <input
                                      id="openDialog"
                                      type="button"
                                      value="Activate"
                                      className="transparentBtn"
                                      onClick={() => this.handleActivate(row)}
                                      test-id="openModal"
                                    />
                                  ) : (
                                    <input
                                      id="openDialog"
                                      type="button"
                                      value="Deactivate"
                                      className="transparentBtn"
                                      onClick={() =>
                                        this.handleDeactivateAdmin(row)
                                      }
                                      test-id="openModal"
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
                      this.props.adminData ? this.props.adminData.length : 0
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
    adminData: state.addAdminReducer.data,
    updateMessage: state.addAdminReducer.message,
    isCreatedSuccess: state.addAdminReducer.isCreatedSuccess,
    isCreatedFailure: state.addAdminReducer.isCreatedFailure,
    isDeactivated: state.addAdminReducer.isDeactivated,
  };
};
const connectedStaffPage = connect(mapStateToProps, {
  getAllAdmins,
  getAllAdminsSuccess,
  getAllStaffFailure,
  createAdmin,
  getAllByStatus,
  deactivateAdmin,
  activateAccount
})(withStyles(Styles)(Staff));

export default connectedStaffPage;
