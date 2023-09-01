import React from "react";
import { Link } from "react-router-dom";
import pikachu from "../../assets/images/pikaChocolate.png";

const Welcome = () => {
	return (
		<div className={null}>
			<div className={null}>
				<h1 className={null}>
					Welcome to an Awesome Pokemon App
				</h1>
				<h2 className={null}>Click Pikachu</h2>
				<Link to="/home">
					<img src={pikachu} alt="pikachu-chocolate" />
				</Link>
			</div>
		</div>
	);
};

export default Welcome;
