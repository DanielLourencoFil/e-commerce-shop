import "./Footer.css";
import React from "react";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className="footer">
			<p className="footer-info">{year + " c " + "NOMAD Store"}</p>
		</div>
	);
}

export default Footer;
