import "./Shop.css";
import { useProductGlobal } from "../../context/ProductsContext";
import { FeaturedProduct } from "../../components";

function Shop() {
	const { products } = useProductGlobal();
	const list = products.map((product, index) => {
		if (index < products.length) {
			return <FeaturedProduct key={index} product={product} />;
		}
	});
	return (
		<div className="main-section">
			<div className="section-center section-products shop">
				<h1 className="section-title">Shop</h1>
				<div className="featured-products-wrapper shop-wrapper">{list}</div>
			</div>
		</div>
	);
}

export default Shop;
