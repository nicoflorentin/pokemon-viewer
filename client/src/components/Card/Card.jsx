import React from "react";
import { Link } from "react-router-dom";
import upperCase from "../../helpers/upperCase";

const Card = ({ pokemon }) => {
	const { id, name, image, Types: types } = pokemon;
	return (
		<div className={null}>
			<div className={null}>
			<h3>{upperCase(name)}</h3>
			</div>
			<div className={null}>
				<Link to={`/detail/${id}`}>
					<img className={null} src={image} alt={name} />
				</Link>
				<p>
					{types.map((type) => (
						<span className={null} key={type.id}>
							{type.name}
						</span>
					))}
				</p>
			</div>
		</div>
	);
};

export default Card
