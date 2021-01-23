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
    getAllAgents,
    getAllAgentsSuccess,
    getAllAgentsFailure,
    activateAccount,
    deactivateAgent,
    changeAgentAccountState
} from "../../redux/actions/agentAction";
 
export const history = createBrowserHistory({
  forceRefresh: true,
});

export class Agent extends Component {
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
    const { getAllAgents } = this.props;
    getAllAgents();
  }
  getAllAgent(){
    const { getAllAgents } = this.props;
    getAllAgents();
  }
  getActiveStaff(){
    const { getAllByStatus } = this.props;
    const status ='active'
    getAllByStatus(status);
  }
  getPendingStaff(){
    const { getAllByStatus } = this.props;
    const status ='pending'
    getAllByStatus(status);
  }

  getInactiveStaff(){
    const { getAllByStatus } = this.props;
    const status ='inactive'
    getAllByStatus(status);
  }
  handleChangePage(event, newPage) {
    this.setState({
      page: newPage,
    });
  }
  handleDeactivateAgent=(row)=>{
    const agentId =row.id;

    const { deactivateAgent } = this.props;
    deactivateAgent(agentId);
  }
  handleActivate=(row)=>{
    const agentId =row.id;
    const { activateAccount } = this.props;
    activateAccount(agentId);
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
      const { getAllAgents, changeAgentAccountState } = this.props;
      console.log('=-=-=-=-=-=-=>>>',this.props.updateMessage);
      changeAgentAccountState();
      getAllAgents();
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
        <div className="requests-title">View All agents</div>
        <div className="table-section-container">
          <div className="category-section">
            <div onClick={this.getAllAgent.bind(this)} style={{cursor:'pointer'}} className='category-menu1'>All</div>
            <div  style={{cursor:'pointer'}} className='category-menu3'>Active</div>
            <div  style={{cursor:'pointer'}} className='category-menu2'>Pending</div>
            <div  style={{cursor:'pointer'}} className='category-menu4'>Inactive</div>
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
                       Nationality
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        Mode pay
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                       Account
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        agent code
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
                    {this.props.staffData
                      ? this.props.staffData
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
                                  {row.nationality}
                                </TableCell>

                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.modePay1}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                    {row.accountNmbr1}                                
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.agentCode}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                  style={
                                    row.status === "active"
                                      ? { color: "green" }
                                      : row.status === 'pending'?{ color: "yellow" }:{color: "red"}
                                  }
                                >
                                  {row.status}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.status === "pending" || row.status === 'inactive'? (
                                    <input
                                      id="openDialog"
                                      type="button"
                                      value="Approve"
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
                                         onClick={() => this.handleDeactivateAgent(row)}
                                      test-id="openModal"
                                    />
                                  ) }
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
                      this.props.staffData ? this.props.staffData.length : 0
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
    staffData: state.agentReducer.data,
    updateMessage:state.agentReducer.message
  };
};
const connectedAgentPage = connect(mapStateToProps, {
    getAllAgents,
    getAllAgentsSuccess,
    getAllAgentsFailure,
    activateAccount,
    deactivateAgent,
    changeAgentAccountState
})(withStyles(Styles)(Agent));

export default connectedAgentPage;
