import React, { useEffect, useState } from "react";
import * as actions from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards.jsx";

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
		<div className={null}>
			<Cards loading={loading} pokemons={pokemons} />
		</div>
	);
};

export default Home;
