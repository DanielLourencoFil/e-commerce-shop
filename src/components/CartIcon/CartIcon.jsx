import "./CartIcon.css";
import React from "react";
import BagIcon from "../../assets/shopping-bag.png";

function CartIcon() {
	return (
		<div className="shop-icon-wrapper">
			<img src={BagIcon} alt="shop-cart-icon" className="shop-icon" />
			<span className="cart-counter">5</span>
		</div>
	);
}

export default CartIcon;
