import React from "react";
import style from "./Preview.module.css";
import upperCase from "../../helpers/upperCase";
import computer from "../../assets/images/computer.png";

const Preview = ({ pokemon }) => {
	const { name, hit_points, attack, defense, speed, height, weight, types } =
		pokemon;

	return (
		<div className={style.detailContainer}>
			<div className={style.upperBar}>
				<h3>{upperCase(name)}</h3>
			</div>

			<div className={style.infoContainer}>
				<img
					className={style.pokemonImg}
					src={computer}
					alt="computer"
				/>
				<div className={style.statsContainer}>
					<p>Hit Points: {hit_points}</p>
					<p>Attack: {attack}</p>
					<p>Defense: {defense}</p>
					<p>Speed: {speed}</p>
					<p>Height: {height}</p>
					<p>Weight: {weight}</p>
					<div className={style.typesContainer}>
						{types.map((type) => (
							<span className={style.type}>{type}</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
