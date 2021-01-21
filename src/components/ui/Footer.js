import React from "react";

const Footer = () => {
	const date = new Date();
	const currentYear = date.getFullYear();
	return (
		<footer className="center">
			<p>A fun foray into React {currentYear}</p>
		</footer>
	);
};

export default Footer;
