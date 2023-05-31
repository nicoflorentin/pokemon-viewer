import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import upperCase from "../../helpers/upperCase";

const Card = ({ pokemon }) => {
	const { id, name, image, Types: types } = pokemon;
	return (
		<div className={style.cardContainer}>
			<div className={style.upperBar}>
			<h3>{upperCase(name)}</h3>
			</div>
			<div className={style.cardContent}>
				<Link to={`/detail/${id}`}>
					<img className={style.pokemonImg} src={image} alt={name} />
				</Link>
				<p>
					{types.map((type) => (
						<span className={style.type} key={type.id}>
							{type.name}
						</span>
					))}
				</p>
			</div>
		</div>
	);
};

export default Card;
