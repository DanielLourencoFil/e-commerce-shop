import React from "react";
import { Hero, MainSection, SectionProducts } from "../../components";

function Home() {
	return (
		<>
			<Hero />
			<MainSection />
			<SectionProducts title={"Featured Collection"} amount={4} />
		</>
	);
}

export default Home;
