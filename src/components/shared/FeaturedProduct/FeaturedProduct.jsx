import "./FeaturedProduct.css";
import { Link } from "react-router-dom";

function FeaturedProduct({ product }) {
	const { id, title, desc, imgUrl, price } = product;
	const handleAddProduct = () => {
		console.log("added");
	};
	return (
		<div className="featured-product-wrapper">
			<Link to={`/product/${id}`}>
				<img
					className="featured-product-img"
					src={imgUrl}
					alt="featured-product"
				/>
			</Link>
			<h2 className="featured-product-title">{title}</h2>
			<p className="featured-product-price">${price}</p>

			<button
				className="button-1 dark featured-product-btn"
				onClick={handleAddProduct}
			>
				Add to cart
			</button>
		</div>
	);
}

export default FeaturedProduct;
