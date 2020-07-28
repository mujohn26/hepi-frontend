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
  getAllCounselings,
  getAllAdversaries
} from "../../redux/actions/advisoryActions";
 
export const history = createBrowserHistory({
  forceRefresh: true,
});

export class CounselingAdversary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsPerPage: 5,
      page: 0,
      open: false,
      openModal: false,
      type:"",
      isCounseling:true,
      isAdversary:false
    };
  }
  componentDidMount() {
    const {   getAllCounselings, } = this.props;
    getAllCounselings();
  }
  getAllStaff(){
    const {   getAllCounselings, } = this.props;
    getAllCounselings();
  }

  getCounseling(){
    this.setState({
      type:"counseling",
      isCounseling:true,
      isAdversary:false
    })
    const {   getAllCounselings, } = this.props;
    getAllCounselings();
  }
  getAdversaries(){
    this.setState({
      type:"adversary",
      isCounseling:false,
      isAdversary:true
    })
    const { getAllAdversaries } = this.props;
    getAllAdversaries();
  }

  handleChangePage(event, newPage) {
    this.setState({
      page: newPage,
    });
  }
  handleDeactivateStaff=(row)=>{
    const staffId =row.id;

    const { deactivateStaff } = this.props;
    deactivateStaff(staffId);
  }
  handleActivate=(row)=>{
    const staffId =row.id;

    const { activateAccount } = this.props;
    activateAccount(staffId);
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
      const { getAllStaff } = this.props;
      getAllStaff();
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
        <div className="requests-title">View All staffs</div>
        <div className="table-section-container">
          <div className="category-section">
            <div onClick={this.getCounseling.bind(this)} style={this.state.isCounseling?{borderBottom: '4px solid #0055FF',color:'#0055ff'}:{}} className='category-menu1'>Counseling</div>
            <div onClick={this.getAdversaries.bind(this)} style={this.state.isAdversary?{borderBottom: '4px solid #0055FF',color:'#0055ff'}:{}} className='category-menu3'>Adversary</div>

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
                        visits
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                       start date
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                       District
                      </TableCell>
                      <TableCell
                        numeric
                        align="center"
                        className={classes.tableCell}
                      >
                        Sector
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
                                  {row.visit}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                  {row.date}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className={classes.tableCellContainer}
                                >
                                    {row.district}                                
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
                                         onClick={() => this.handleDeactivateStaff(row)}
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
    staffData: state.advisoryCounselingReducer.data,
    updateMessage:state.advisoryCounselingReducer.message
  };
};
const connectedCounselingAdversaryPage = connect(mapStateToProps, {
  getAllCounselings,
  getAllAdversaries
})(withStyles(Styles)(CounselingAdversary));

export default connectedCounselingAdversaryPage;
