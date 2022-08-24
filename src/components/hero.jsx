import React from 'react';
import HeroImage from '../assets/hero-img.png';
import './hero.css';

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				{/* left side start */}
				<div className="left">
					<p>Buy & Sell Crypto 24/7 using your retirement account</p>
					<h1>Invest in Cryptocurreny with Your IRA</h1>
					<p>Buy, Sell, and store hundreds of cryptocurrencies</p>
					<div className="input-container">
						<input type="email" placeholder="Enter your email" />
						<button className="btn">Learn More</button>
					</div>
				</div>
				{/* left side end */}

				{/* right side start */}
				<div className="right">
					<div className="img-container">
						<img src={HeroImage} alt="Hero Image" />
					</div>
				</div>
				{/* left side end */}
			</div>
		</div>
	);
};

export default Hero;
