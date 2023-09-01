import React from "react";
import upperCase from "../../helpers/upperCase";
import computer from "../../assets/images/computer.png";

const Preview = ({ pokemon }) => {
	const { name, hit_points, attack, defense, speed, height, weight, types } =
		pokemon;

	return (
		<div className={null}>
			<div className={null}>
				<h3>{upperCase(name)}</h3>
			</div>

			<div className={null}>
				<img
					className={null}
					src={computer}
					alt="computer"
				/>
				<div className={null}>
					<p>Hit Points: {hit_points}</p>
					<p>Attack: {attack}</p>
					<p>Defense: {defense}</p>
					<p>Speed: {speed}</p>
					<p>Height: {height}</p>
					<p>Weight: {weight}</p>
					<div className={null}>
						{types.map((type) => (
							<span className={null}>{type}</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
