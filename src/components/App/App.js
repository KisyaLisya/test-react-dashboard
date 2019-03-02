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
import Tasks from 'app/Tasks';

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
				<div className="App">
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
							exact path="/tasks/:id?"
							render={() => {
								return(
									<Tasks
										className="App-main"
									/>
								)
							}}
						/>
						<Route
							path="/tasks/:id?"
							render={() => {
								return(
									<Redirect
										to="/tasks/"
									/>
								)
							}}
						/>
						<Redirect
							to="/dashboard"
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
