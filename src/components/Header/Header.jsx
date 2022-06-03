import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
function Header() {
	return (
		<nav className="navbar">
			<div className="nav-center section-center">
				<Link to="/" className="logo">
					NOMAD
				</Link>
				<ul className="navlinks">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/shop">Shop</Link>
					</li>
				</ul>
				<CartIcon />
			</div>
		</nav>
	);
}

export default Header;
