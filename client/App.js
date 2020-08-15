import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/ContactUs';
import Header from './src/components/Header';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
			</Switch>
			<footer>All rights reserved. &copy; 2020</footer>
		</div>
	);
}

export default App;
