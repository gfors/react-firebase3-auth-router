import React from 'react';

const PrivateComponent = React.createClass({
	handleLogout: function(e){
		e.preventDefault();
		firebase.auth().signOut();
	},
	render() {
		return (
			<div>
				<h3>PrivateComponent</h3>
				<a href="" onClick={this.handleLogout}>Log out</a><br/>
			</div>
		);
	}
});

export default PrivateComponent;