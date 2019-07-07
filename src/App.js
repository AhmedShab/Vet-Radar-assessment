import React from 'react';

import Products from './container/Products/Products';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Cart from './container/Cart/Cart';

function App() {
	return (
		<Router>
			<div>
				<Route exact path='/' component={Products} />
				<Route exact path='/cart' component={Cart} />
			</div>
		</Router>
	);
}

export default App;
