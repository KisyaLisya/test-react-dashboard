import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import './App.less';
import { getUserLoginStatus, getUserLoginLoading, getUserLoginError } from 'store/selectors';
import { login as loginAction, loginByToken } from 'store/actions';

import Header from './Header';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import Tasks from './Tasks';

const menu = [
	{ id: 'dashboard', name: 'Dashboard', url:'/dashboard', active: true },
	{ id: 'tasks', name: 'Tasks', url:'/tasks', active: false },
]

class App extends Component {

	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		const { loginByToken } = this.props;
		loginByToken();
	}

	onSubmit(data) {
		const { loginAction } = this.props;
		loginAction(data);
	}

	renderLoginPage(props) {
		const { className = '', error = '', loading = false, onSubmit } = props;

		return(
			<Switch>
				<Route
					path="/login" render={(props) => {
						return(
							<LoginForm
								className={className}
								loading={loading}
								error={error}
								onSubmit={onSubmit}
							/>
						)
					}}
				/>
				<Redirect to="/login"	/>
			</Switch>
		)
	}

	renderMainPage(props) {
		const { menu = [] } = props;

		return (
			<React.Fragment>
				<Route path="/" render={(props) => {
						return(
							<Header
								className="App-header"
								name="UI Task Tracker"
								menu={menu}
								route={props}
							/>
						)
					}}
				/>
				<Switch>
					<Route
						exact path="/dashboard"
						render={() => {
							return(
								<Dashboard
									className="App-main"
								/>
							)
						}}
					/>
					<Route
						path="/dashboard/:id?"
						render={() => {
							return(
								<Redirect
									to="/dashboard"
								/>
							)
						}}
					/>
					<Route
						path="/tasks/:id?"
						render={() => {
							return(
								<Tasks
									className="App-main"
								/>
							)
						}}
					/>
					<Redirect
						to="/dashboard"
					/>
				</Switch>
			</React.Fragment>
		)
	}

	render() {
		const {
			className = '',
			isLoggedIn = false,
			loading = false,
			loginError = ''
		} = this.props;

		let appBody = null;

		if (!isLoggedIn) {
			appBody = this.renderLoginPage({
				loading,
				error: loginError,
				onSubmit: this.onSubmit
			})
		} else {
			appBody = this.renderMainPage(menu);
		}

		return(
			<Router>
				<div className="App">
					{appBody}
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: getUserLoginStatus(state),
		loading: getUserLoginLoading(state),
		loginError: getUserLoginError(state)
	}
}

export default connect(
	mapStateToProps,
	{ loginAction, loginByToken }
)(App);
