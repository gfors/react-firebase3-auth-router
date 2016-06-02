import React from 'react';
import ReactDOM from 'react-dom';
import { Auth, DatabaseRef } from './config/firebaseConfig.js';
import { Public, Private } from './config/routes';

const Loading = React.createClass({
	render() {
		return(
			<div>
				<h2>Loading</h2>
			</div>
		);
	}
});

const App = React.createClass ({

	getInitialState: function(){
		return {
			auth: null
		}
	},
	componentWillMount() {
		Auth.onAuthStateChanged( (user) => {
			this.setState({
				auth: (user) ? true : false
			})
		})
	},
	render() {
		let Routes;

		switch (this.state.auth) {

			case true:
			Routes = <Private />
			break;

			case false:
			Routes = <Public />;
			break;

			default:
			Routes = <Loading />;
			break;

		}

		return (
			<div>
				{ Routes }
			</div>
		);
	}
});

ReactDOM.render(<App/> , document.getElementById('content'));