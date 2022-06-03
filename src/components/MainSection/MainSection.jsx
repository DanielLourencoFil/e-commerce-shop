import "./MainSection.css";
import StudioBag from "../../assets/studio-bag.png";
import { useNavigate } from "react-router-dom";

import React from "react";

function MainSection({ product }) {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/products/1");
	};
	return (
		<main className="main-section">
			<div className="section-center ms">
				<div className="ms-img-wrapper">
					<img src={StudioBag} alt="studio-bag" className="ms-img" />
					<button
						className="button-1 dark ms-btn desktop"
						onClick={handleClick}
					>
						studio bag
					</button>
				</div>
				<div className="ms-info-wrapper">
					<div className="ms-info">
						<h2 className="ms-title">
							Designed for fashion. Crafted for sport.
						</h2>
						<p className="ms-desc">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
							animi sed dolores, incidunt earum voluptatum cum ullam enim
							debitis, porro, amet sint voluptatem nisi? Dolorum delectus odio
							nemo dolores quibusdam qui voluptate blanditiis deserunt
							distinctio, perspiciatis architecto excepturi.
						</p>
					</div>
					<button className="button-1 dark ms-btn mobile" onClick={handleClick}>
						studio bag
					</button>
				</div>
			</div>
		</main>
	);
}

export default MainSection;
