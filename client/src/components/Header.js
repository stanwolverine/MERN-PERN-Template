import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header style={{ display: 'flex' }}>
			<h3>Unicat Learning</h3>
			<NavLink exact to="/" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
				Home
			</NavLink>
			<NavLink to="/about" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
				About Us
			</NavLink>
			<NavLink to="/contact" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
				Contact Us
			</NavLink>
		</header>
	);
};

export default Header;
