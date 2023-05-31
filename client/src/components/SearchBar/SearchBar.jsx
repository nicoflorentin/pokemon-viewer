import React, { useState } from "react";
import * as action from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [input, setInput] = useState("");

	const handleInput = (event) => {
		const input = event.target.value;
		setInput(input);
	};

	const searchPokemon = (name) => {
		dispatch(action.getPokemonByName(name));
		navigate("/home");
		setInput("");
	};

	return (
		<div>
			<input
				className={style.input}
				value={input}
				type="text"
				onChange={handleInput}
			/>
			<button
				className={style.button}
				onClick={() => searchPokemon(input)}
			>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
