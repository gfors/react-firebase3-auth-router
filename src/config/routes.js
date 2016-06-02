import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import PublicComponent from '../components/public/PublicComponent';
import PrivateComponent from '../components/private/PrivateComponent';
import NotFound from '../components/NotFound';

const Public = () => {
	return(
		<Router history={browserHistory}>
			<Route path='/' component={PublicComponent} />
			<Route path="*" component={NotFound}/>
		</Router>
	);
};
const Private = () => {
	return(
		<Router history={browserHistory}>
			<Route path="/" component={PrivateComponent} />
			<Route path="*" component={NotFound}/>
		</Router>
	);
};

export {
	Public,
	Private
}