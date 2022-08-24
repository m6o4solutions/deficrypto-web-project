import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
	/* declare variables */
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<div className="header">
			<div className="container">
				{/** logo section start */}
				<h1>
					De<span className="primary">Fi</span>
				</h1>
				{/** logo section end */}

				{/** application menu start */}
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Featured</a>
					</li>
					<li>
						<a href="/">Earn</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
				{/** application menu end */}

				<div className="btn-group">
					<button className="btn">Connect Wallet</button>
				</div>

				{/** hamburger menu start */}
				<div className="hamburger" onClick={handleClick}>
					{click ? <FaTimes size={20} style={{ color: '#333333' }} /> : <FaBars size={20} style={{ color: '#333333' }} />}
				</div>
				{/** hamburger menu end */}
			</div>
		</div>
	);
};

export default Navbar;
