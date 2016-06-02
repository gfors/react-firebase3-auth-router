import React from 'react';

const PublicComponent = React.createClass({
	handleLogin: function(e){
		e.preventDefault();

			var email = this.refs.email.value;
			var password = this.refs.password.value;

			if (email.length < 4) {
				alert('Please enter an email address.');
				return;
			}
			if (password.length < 4) {
				alert('Please enter a password.');
				return;
			}

			firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;

				if (errorCode === 'auth/wrong-password') {
					alert('Wrong password.');
				} else {
					console.error(error);
				}

			});

	},
	render: function render() {
		return (
			<div>
				<h3>PublicComponent</h3>
				<form onSubmit={this.handleLogin}>
					<label> Email </label>
					<input ref="email" placeholder="Email"/>
					<label>Password</label>
					<input ref="password" type="password" placeholder="Password" />

					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
});

export default PublicComponent;