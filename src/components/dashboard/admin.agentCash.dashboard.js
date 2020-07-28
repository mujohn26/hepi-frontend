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
import AddAdminIcon from "../../assets/images/addIcon.png";
import "../../styles/request.css";
import {
  AdminGetAgentCashHistory,
  getAllAgentHistorySuccess,
  getAllAgentHistoryFailure,
  changeCashBalanceStatus,
  acceptCashBalanceSuccessfully,
  acceptCashBalanceFailure,
  changeCashBalanceState,
  RejectCashBalance,
  getCashHistoryByStatus,
  updateErrorMessage,
  AdminAcceptCashBalance
} from "../../redux/actions/agentAction";
import { RowingRounded } from "@material-ui/icons";

export const history = createBrowserHistory({
  forceRefresh: true,
});

export class AgentHistory extends Component {
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
    const { AdminGetAgentCashHistory } = this.props;
    AdminGetAgentCashHistory();
  }
  handleAcceptBalance = (row) => {
    const balanceId = row.id;
    const status = "pending"
    const { AdminAcceptCashBalance } = this.props;
    AdminAcceptCashBalance(balanceId, status);
  };
  handleGetAllBalance() {
    const { AdminGetAgentCashHistory, updateErrorMessage } = this.props;
    updateErrorMessage();
    AdminGetAgentCashHistory();
  }
  handleRejectBalance = (row) => {
    const balanceId = row.id;
    const status = "rejected"
    const { RejectCashBalance } = this.props;
    RejectCashBalance(balanceId, status);
  };
  handleGetRejectedBalance() {
    const status = "rejected";
    const { getCashHistoryByStatus, updateErrorMessage } = this.props;
    updateErrorMessage();
    getCashHistoryByStatus(status);
  }
  handleGetPendingBalance() {
    const status = "pending";
    const { getCashHistoryByStatus, updateErrorMessage } = this.props;
    updateErrorMessage();
    getCashHistoryByStatus(status);
  }
  handleGetUnconfirmedBalance() {
    const status = "unconfirmed";
    const { getCashHistoryByStatus, updateErrorMessage } = this.props;
    updateErrorMessage();
    getCashHistoryByStatus(status);
  }

  handleGetFinishedBalance() {
    const status = "finished";
    const { getCashHistoryByStatus } = this.props;
    getCashHistoryByStatus(status);
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
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.updateMessage !== prevProps.updateMessage) {
      const { AdminGetAgentCashHistory, changeCashBalanceState } = this.props;
      changeCashBalanceState();
      AdminGetAgentCashHistory();
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
          <div className="requests-title">View all cash history</div>
        </div>
        <div className="table-section-container">
          <div className="category-section">
            <div
              onClick={this.handleGetAllBalance.bind(this)}
              style={{ cursor: "pointer" }}
              className="category-menu1"
            >
              All
            </div>
            <div
              onClick={this.handleGetUnconfirmedBalance.bind(this)}
              style={{ cursor: "pointer" }}
              className="category-menu1"
            >
              Unconfirmed
            </div>
            <div
              onClick={this.handleGetPendingBalance.bind(this)}
              style={{ cursor: "pointer" }}
              className="category-menu2"
            >
              Pending
            </div>
            <div
              onClick={this.handleGetRejectedBalance.bind(this)}
              style={{ cursor: "pointer" }}
              className="category-menu3"
            >
              Rejected
            </div>
            <div
              onClick={this.handleGetFinishedBalance.bind(this)}
              style={{ cursor: "pointer" }}
              className="category-menu4"
            >
              Finished
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
                        Amount
                      </TableCell>
                      <TableCell align="left" className={classes.tableCell}>
                        Agent
                      </TableCell>
                      <TableCell align="left" className={classes.tableCell}>
                        Paid
                      </TableCell>
                      <TableCell align="left" className={classes.tableCell}>
                        Status
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  {this.props.messageError && this.props.messageError !== "" ? (
                    <div style={{marginLeft:"40%", fontSize:"20px"}}>Ooops no balance with this status</div>
                  ) : (
                    <TableBody>
                      {this.props.agentHistoryData
                        ? this.props.agentHistoryData
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
                                    {row.amount}Rwf
                                  </TableCell>
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableCellContainer}
                                  >
                                    {row.agentCode}
                                  </TableCell>
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableCellContainer}
                                  >
                                    {row.isPaid === true ? "true" : "false"}
                                  </TableCell>
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    className={classes.tableCellContainer}
                                  >
                                    {row.status}
                                  </TableCell>
                                  {row.status === "pending" && row.state ==="agent"? (
                                    <TableCell
                                      align="center"
                                      className={classes.tableCellContainer}
                                      style={{
                                        color: "yellow",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Waiting confirmation from agent
                                    </TableCell>
                                  ) : row.status === "finished" ? (
                                    <TableCell
                                      align="center"
                                      className={classes.tableCellContainer}
                                      style={{
                                        color: "green",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Payment done
                                    </TableCell>
                                  ) : row.status === "rejected" && row.status==="agent" ? (
                                    <TableCell
                                      align="center"
                                      className={classes.tableCellContainer}
                                      style={{
                                        color: "red",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Rejected waiting confirmation again
                                    </TableCell>
                                  ) : (
                                    <TableCell
                                      align="center"
                                      className={classes.tableCellContainer}
                                    >
                                      <div className="agent-history-buttons">
                                        <div>
                                          {" "}
                                          <input
                                            id="openDialog"
                                            type="button"
                                            value="Reject"
                                            className="transparentBtn"
                                            onClick={() =>
                                              this.handleRejectBalance(row)
                                            }
                                            test-id="openModal"
                                          />
                                        </div>
                                        <div>
                                          {" "}
                                          <input
                                            id="openDialog"
                                            type="button"
                                            value="Accept"
                                            className="transparentBtn"
                                            onClick={() =>
                                              this.handleAcceptBalance(row)
                                             }
                                            test-id="openModal"
                                          />
                                        </div>
                                      </div>
                                    </TableCell>
                                  )}
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
                  )}
                </Table>
              </TableContainer>

              <Grid container>
                <Grid item xs={12}>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={
                      this.props.servicesData
                        ? this.props.servicesData.length
                        : 0
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
    agentHistoryData: state.agentReducer.data,
    updateMessage: state.agentReducer.CashBalanceMessage,
    totalAmount: state.agentReducer.totalAmount,
    unpaidAmount: state.agentReducer.unpaidAmount,
    messageError: state.agentReducer.messageError,
  };
};
const connectedAgentHistoryPage = connect(mapStateToProps, {
  AdminGetAgentCashHistory,
  getAllAgentHistorySuccess,
  getAllAgentHistoryFailure,
  changeCashBalanceStatus,
  acceptCashBalanceSuccessfully,
  acceptCashBalanceFailure,
  changeCashBalanceState,
  RejectCashBalance,
  getCashHistoryByStatus,
  updateErrorMessage,
  AdminAcceptCashBalance
})(withStyles(Styles)(AgentHistory));

export default connectedAgentHistoryPage;
