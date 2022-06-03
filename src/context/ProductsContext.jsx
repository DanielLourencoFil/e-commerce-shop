import { createContext, useContext, useState } from "react";
import PRODUCTS_DATA from "../shop/products";

const ProductContext = createContext();

function ProductsContextProvider({ children }) {
	const [products] = useState(PRODUCTS_DATA);

	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
}
export const useProductGlobal = () => {
	return useContext(ProductContext);
};
export default ProductsContextProvider;
