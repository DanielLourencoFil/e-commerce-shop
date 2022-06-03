import "./SingleProductPage.css";
import { SingleProduct } from "../../components";
import { useParams, useNavigate } from "react-router-dom";
import { useProductGlobal } from "../../context/ProductsContext";

import { useState, useEffect } from "react";

function SingleProductPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [product, setProduct] = useState({});
	const navigate = useNavigate();
	const { id } = useParams();
	const { products } = useProductGlobal();

	useEffect(() => {
		const findProduct = products.find((item) => Number(item.id) === Number(id));

		//if product doen's exist, redirect to shop page
		if (!findProduct) {
			navigate("/shop");
		}
		setProduct(findProduct);
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (!isLoading) {
		return (
			<main className="main-section">
				<div className="section-center single-product-page">
					<SingleProduct product={product} />
				</div>
			</main>
		);
	}
}

export default SingleProductPage;
