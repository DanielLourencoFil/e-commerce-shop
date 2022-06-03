import Bag1 from "../assets/bag01.jpg";
import Bag2 from "../assets/bag02.jpg";
import Bag3 from "../assets/bag03.jpg";
import Bag4 from "../assets/bag04.jpg";
const products = [
	{
		id: 1,
		title: "bag 1",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi suscipit voluptates corporis corrupti quia placeat.",
		imgUrl: { Bag1 },
		price: 50,
	},
	{
		id: 2,
		title: "bag 2",
		desc: "illo tempore ratione provident. Voluptatibus perspiciatis reiciendis libero illum facilis commodi officia accusamus quo repellat.",
		imgUrl: "(./images/bag02-jpg)",
		price: 150,
	},
	{
		id: 3,
		title: "bag 3",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi suscipit voluptates corporis corrupti quia placeat.",
		imgUrl: "(../images/bag03-jpg)",
		price: 550,
	},
	{
		id: 4,
		title: "bag 4",
		desc: "illo tempore ratione provident. Voluptatibus perspiciatis reiciendis libero illum facilis commodi officia accusamus quo repellat.",
		imgUrl: "../../images/bag04-jpg",
		price: 79,
	},
	{
		id: 5,
		title: "bag 5",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi suscipit voluptates corporis corrupti quia placeat.",
		imgUrl: "../assets/bag01-jpg",
		price: 50,
	},
	{
		id: 6,
		title: "bag 6",
		desc: "illo tempore ratione provident. Voluptatibus perspiciatis reiciendis libero illum facilis commodi officia accusamus quo repellat.",
		imgUrl: "../assets/bag02-jpg",
		price: 150,
	},
	{
		id: 7,
		title: "bag 7",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi suscipit voluptates corporis corrupti quia placeat.",
		imgUrl: "../assets/bag03-jpg",
		price: 550,
	},
	{
		id: 8,
		title: "bag 8",
		desc: "illo tempore ratione provident. Voluptatibus perspiciatis reiciendis libero illum facilis commodi officia accusamus quo repellat.",
		imgUrl: "./assets/bag04-jpg",
		price: 79,
	},
];
export default products;
