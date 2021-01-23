import React, {useEffect}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SideNavBarPage from '../components/common/SideNavBar';  
import TopNavBar from '../components/profile/top.navbar.jsx';
import Dashboard from '../components/dashboard/admin.dashboard';
// import Profile from '../components/profile/Profile.jsx';
import Requests from '../components/pages/requests';
import Staffs from '../components/pages/staff';
import AddAdmin from '../components/dashboard/createAdmin.dashboard';
import AddServices from '../components/dashboard/services.dashboard';
import Agents from '../components/dashboard/agent.dashboard';
import CounselingAdversary from '../components/dashboard/counselingAdverary.dashboard';
import MperekezaDashboard from '../components/dashboard/mperekeza.dashboard';
import AgentHistory from '../components/dashboard/agentHistory.dashboard';
import AdminAgentHistory from '../components/dashboard/admin.agentCash.dashboard';
import Testimonials from '../components/dashboard/Testimonials';
import verifyToken from "../helpers/verifyToken";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(1),
	},
}));

const MainLayout = props => {
	const matches = useMediaQuery('(max-width: 767px)');
	const titleFontSize = matches ? '1.5em' : '2em';
	const appBarCss = matches ? '1px 1px gray' : '0px 0px white';
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [userRole, setUserRole] = React.useState('');

	useEffect(() => {
		const token = localStorage.getItem("token");
		const user = verifyToken(token);
		setUserRole(user.payload.role);
	
	})
	
	const drawer = (
		<div>
			<SideNavBarPage />
		</div>
	);
	return (
		<Router>
			<div className={classes.root}>
				<AppBar
					position='fixed'
					style={{ backgroundColor: 'white', boxShadow: `${appBarCss}` }}
					className={classes.appBar}
				>
					<Toolbar>
						<IconButton
							id='IconButton'
							color='primary'
							aria-label='open drawer'
							edge='start'
							onClick={() => {
								setMobileOpen(!mobileOpen);
							}}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<Grid
							container
							justifyItems='right'
							style={{
								marginTop: '2px',
								width: '70%',
								color: '#5d00ff',
								textAlign: 'right',
								fontWeight: 'bold',
							}}
						>
							<Grid
								xs={11}
								xl={7}
								md={7}
								style={{
									textAlign: 'left',
									fontSize: titleFontSize,
									fontWeight: 'bold',
									width: '60%',
								}}
							>
								{userRole ==='agent'?'Agent DASHBOARD':props.title}
							</Grid>
						</Grid>
						<TopNavBar />
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer} aria-label='mailbox folders'>
					<Hidden smUp implementation='css'>
						<Drawer
							id='Drawer'
							container={container}
							variant='temporary'
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={mobileOpen}
							onClose={() => {
								setMobileOpen(!mobileOpen);
							}}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true,
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation='css'>
						<Drawer
							classes={{
								paper: classes.drawerPaper,
							}}
							variant='permanent'
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content} style={{ paddingTop: '50px' }}>
					<div className={classes.toolbar} />

					<Switch>
						<Route path='/dashboard' exact component={Dashboard} />
						<Route path='/dashboard/staff' exact component={Staffs} />
						<Route path='/dashboard/requests' exact component={Requests} />
                        <Route path='/dashboard/add-admin' exact component={AddAdmin}/>
						<Route path='/dashboard/services' exact component={AddServices}/>
						<Route path='/dashboard/agents' exact component={Agents}/>
						<Route path='/dashboard/counseling-adversary' exact component={CounselingAdversary}/>
						<Route path='/dashboard/mperekeza' exact component={MperekezaDashboard}/>
						<Route path='/dashboard/testimonial' exact component={Testimonials}/>
                        <Route path='/dashboard/agent/AgentHistory' exact component={AgentHistory}/>
						<Route path='/dashboard/agent-cash' exact component={AdminAgentHistory}/>
						
					</Switch>
				</main>
			</div>
		</Router>
	);
};
export const mapStateToProps = state => {
	return {
		title: 'Dashboard',
	};
};

export default connect(mapStateToProps)(MainLayout);