import React, { useEffect, useState } from "react";
import * as actions from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards.jsx";
import style from "./Home.module.css";

const Home = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.filtered);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		!pokemons.length
			? dispatch(actions.getPokemons()).then(() => {
					setLoading(false);
			  })
			: setLoading(false);
	}, []);

	return (
		<div className={style.homeContainer}>
			<Cards loading={loading} pokemons={pokemons} />
		</div>
	);
};

export default Home;
