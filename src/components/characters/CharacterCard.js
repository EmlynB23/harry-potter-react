import React from "react";

const CharacterCard = ({ item }) => {
	return (
		<div className="card" key={item.name}>
			<div className="card-inner">
				<div className="card-front">
					<img className="card-img" src={item.image} alt={item.name}></img>
				</div>
				<div className="card-back">
					<h3>{item.name}</h3>
					<hr />
					<ul>
						<li>House: {item.house}</li>
						<li>Status: {item.alive ? "Alive" : "Deceased"}</li>
						<li>Actor: {item.actor}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
