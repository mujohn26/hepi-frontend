import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { GetUserProfile } from '../../actions/user.profile.action';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import userImage from '../../assets/images/john.jpg'
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core'; 
import Navlinks from './nav.links.jsx';
import verifyToken from '../../helpers/verifyToken';
import { createBrowserHistory } from "history";
export const history = createBrowserHistory({
	forceRefresh: true
  });

export class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  name: "",
		  email: "",
		  agentCode:""
		};
	  }
	UNSAFE_componentWillMount() {
		const token = localStorage.getItem('token');
		const user = verifyToken(token);
		this.setState({
			name:user.payload.userNames,
			email:user.payload.email,
			agentCode:user.payload.agentCode
		})
	}
	state = {
		logout: false,
	};
	handleClick(){
		localStorage.clear();
		history.push("/dashboard");
	}
	render() {
		const { userProfileInfo} = this.props;
		return (
			<>
					<>
						<Box width='100%' style={{ height: '100%' }}>
							<Link to='/profile' style={{ textDecoration: 'none' }}>
								<Box width='100%' height='80px'>
									<Typography align='center'>
										<img
											style={{
												width: '30%',
												height: '70px',
												borderRadius: '50%',
												objectFit: 'cover',
											}}
											src={userImage}
											alt=''
										/>
									</Typography>
								</Box>
								<Box fontStyle={2} alignSelf={3}>
									<Typography
										align='center'
										style={{ fontSize: '18px', color: 'gray' }}
									>
									{this.state.name}
									</Typography>
								</Box>
								<Box marginTop={1}>
									<Typography
										align='center'
										style={{ fontSize: '18px', color: 'gray' }}
									>
									{this.state.email}
									</Typography>
								</Box>
								<Box marginTop={1}>
									<Typography
										align='center'
										style={{ fontSize: '18px', color: 'gray' }}
									>
										Agent code: 
									{this.state.agentCode}
									</Typography>
								</Box>
							</Link>
						</Box>
						<Navlinks />
						<Box marginTop={1}>
							<ListItem
								id='dashboard'
								button
								onClick={this.handleClick.bind(this)}
							>
								<ListItemIcon>
									<ExitToAppIcon />
								</ListItemIcon>
								<ListItemText>
									<Typography style={{ fontSize: '16px' }}>Logout</Typography>
								</ListItemText>
							</ListItem>
						</Box>{' '}
					</>
			</>
		);
	}
}
export const mapStateToProps = state => {
	return {
		userProfileInfo: 'state.userProfileReducer.UpdateduserProfileInfo',
		notifications: 'state.NotificationReducer.Notifications',
	};
};
export default connect(mapStateToProps, {
	// GetUserProfile,
})(UserProfile);