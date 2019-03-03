import React, { Component } from 'react';
import { connect } from "react-redux";

import './LoginForm.less';
import { isDef } from 'utils/utils';

import BaseForm from 'components/BaseForm';
import Button from 'components/Button';
import Input from 'components/Input';
import Spinner from 'components/Spinner';

class LoginForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isReset: false,
			login: '',
			password: ''
		}

		this.bindFuncs();
	}

	componentDidUpdate() {
		const { error = '' } = this.props;
		const { isReset = false } = this.state;

		if (error && !isReset) {
			this.resetState();
		}
	}

	bindFuncs() {
		this.onChangeLogin = this.onChangeLogin.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	resetState() {
		this.setState({
			isReset: true,
			login: '',
			password: ''
		})
	}

	onChangeInput(value, propsName) {
		if (!isDef(value)) return;

		this.setState({
			[propsName]: value
		})
	}

	onChangeLogin(e) {
		this.onChangeInput(e.target.value, 'login');
	}

	onChangePassword(e) {
		this.onChangeInput(e.target.value, 'password');
	}

	onSubmit(e) {
		e.preventDefault();
		const { onSubmit: onSubmitCallback } = this.props;
		const { login = '', password = '' } = this.state;

		this.setState({
			isReset: false,
		});

		onSubmitCallback({
			login,
			password
		});
	}

	render() {
		const {
			className = '',
			loading = false,
			error = ''
		} = this.props;
		const {
			login = '',
			password = ''
		} = this.state;

		const errorBlock = error ? (
			<p className="LoginForm-error">
				{error}
			</p>
		) : null;

		if (loading) {
			return(
				<Spinner />
			)
		}

		return(
			<form
				className="LoginForm"
				onSubmit={(e) => this.onSubmit(e)}
			>
				<BaseForm
					id="login"
					className="LoginForm-input"
					label="Username"
				>
					<Input
						id="login"
						className="form-control-lg"
						placeholder="Username ..."
						value={login}
						onChange={this.onChangeLogin}
					/>
				</BaseForm>
				<BaseForm
					id="password"
					className="LoginForm-input"
					label="Password"
				>
					<Input
						id="password"
						type="password"
						className="form-control-lg"
						placeholder="Password ..."
						value={password}
						onChange={this.onChangePassword}
					/>
				</BaseForm>

				<Button
					className="btn-primary btn-lg LoginForm-button"
					name="Login"
					type="submit"
					onClick={this.onSubmit}
				/>
				{errorBlock}
			</form>
		);
	}
}

export default LoginForm;
