import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NotFound404, Shop, SingleProductPage } from "./Pages";
import { Layout } from "./components";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/product/:id" element={<SingleProductPage />} />

					<Route path="*" element={<NotFound404 />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
