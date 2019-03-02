import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import './App.less';

import Header from 'app/Header';
import Dashboard from 'app/Dashboard';

const menu = [
	{ id: 'dashboard', name: 'Dashboard', url:'/dashboard', active: true },
	{ id: 'tasks', name: 'Tasks', url:'/tasks', active: false },
]

class App extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		const { className = '' } = this.props;

		return(
			<Router>
				<div>
					<Route path="/" render={(props) => {
							return(
								<Header
									name="UI Task Tracker"
									menu={menu}
									route={props}
								/>
							)
						}}
					/>
					<Switch>
						<Route
							exact path="/"
							render={() => <h1>Home</h1>}
						/>
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
							exact path="/tasks/:id?"
							render={() => <h1>Tasks</h1>}
						/>
						<Route
							path="/tasks/:id?"
							render={() => {
								return(
									<Redirect
										to="/tasks"
									/>
								)
							}}
						/>
						<Redirect
							to="/"
						/>
					</Switch>

				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => {
	return {
		menu: getPerformedTasks(state),
		sortOptions: getSortOptions(state)
	}
}

export default connect(
	null,
	null
)(App);
