import "./SectionProducts.css";
import { useProductGlobal } from "../../context/ProductsContext";
import { FeaturedProduct } from "../../components";

function SectionProducts({ title, amount }) {
	const { products } = useProductGlobal();
	const list = products.map((product, index) => {
		if (index < amount || products.length) {
			return <FeaturedProduct key={index} product={product} />;
		}
	});
	return (
		<div className="main-section">
			<div className="section-center section-products">
				<h1 className="section-title">{title}</h1>
				<div className="featured-products-wrapper">{list}</div>
			</div>
		</div>
	);
}

export default SectionProducts;
