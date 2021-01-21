import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterGrid = ({ items, isLoading }) => {
	return isLoading ? (
		<h1 className="center">Loading...</h1>
	) : (
		<section className="character-grid">
			{items.map((item) => {
				return <CharacterCard item={item} />;
			})}
		</section>
	);
};

export default CharacterGrid;
