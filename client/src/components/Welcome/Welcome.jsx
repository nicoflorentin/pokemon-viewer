import React from "react";
import style from "./Welcome.module.css";
import { Link } from "react-router-dom";
import pikachu from "../../assets/images/pikaChocolate.png";

const Welcome = () => {
	return (
		<div className={style.componentContainer}>
			<div className={style.welcomeContainer}>
				<h1 className={style.title}>
					Welcome to an Awesome Pokemon App
				</h1>
				<h2 className={style.title}>Click Pikachu</h2>
				<Link to="/home">
					<img src={pikachu} alt="pikachu-chocolate" />
				</Link>
			</div>
		</div>
	);
};

export default Welcome;
