import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

import Home from './Home';
import Product from './Product';

const store = createStore(reducers);

const Routes = () => (
	<Provider store={store}>
		<Router>
			<div>
				<Route path="/" component={Home} exact/>
				<Route path="/produto" component={Product} />
			</div>
		</Router>
	</Provider>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
