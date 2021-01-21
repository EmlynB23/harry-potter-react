import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import axios from "axios";
import CharacterGrid from "./components/characters/CharacterGrid";
import Footer from "./components/ui/Footer";

function App() {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`http://hp-api.herokuapp.com/api/characters`);

			console.log(result.data);
			setItems(result.data);
			setIsLoading(false);
		};
		fetchItems();
	}, []);

	return (
		<div>
			<Header />
			<CharacterGrid key={items} items={items} isLoading={isLoading} />
			<Footer />
		</div>
	);
}

export default App;
