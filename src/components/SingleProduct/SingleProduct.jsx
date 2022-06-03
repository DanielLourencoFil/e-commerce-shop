import "./SingleProduct.css";

import React from "react";

function SingleProduct({ product }) {
	const { title, desc, imgUrl, price, id } = product;
	return (
		<div className="single-product-wrapper">
			<img src={imgUrl} alt="product" className="single-product-img" />
			<div className="single-product-info">
				<h4 className="single-product-title">{title}</h4>
				<p className="single-product-price">{price}</p>
				<button className="button-1 light single-product-btn">
					add to cart
				</button>
				<button className="button-1 dark single-product-btn">
					proceed to checkout
				</button>
				<p className="single-product-desc">{desc}</p>
			</div>
		</div>
	);
}

export default SingleProduct;
