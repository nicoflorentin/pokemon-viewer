import React, { useEffect, useState } from "react";
import pokemonValidation from "../../helpers/pokemonValidation";
import postPokemon from "../../helpers/postPokemon";
import { useSelector } from "react-redux";
import style from "./Form.module.css";
import Preview from "../Preview/Preview";

const initialState = {
	name: "",
	image: "",
	hit_points: "",
	attack: "",
	defense: "",
	speed: "",
	height: "",
	weight: "",
	types: [],
};

const Form = () => {

	const types = useSelector((state) => state.types);
	const [pokemonData, setPokemonData] = useState(initialState);
	const [disablePost, setDisablePost] = useState(true);
	const [errors, setErrors] = useState({
		name: "",
		image: "",
		hit_points: "",
		attack: "",
		defense: "",
		speed: "",
		height: "",
		weight: "",
		types: "",
	});

	useEffect(() => {
		
		handleDisable({ ...pokemonData });
	}, [pokemonData]);

	const handleDisable = (pokemonData) => {
		const values = Object.values(pokemonData);
		const allKeysFilled = values.every((value) => value.length > 0);

		setDisablePost(!allKeysFilled);
	};

	const handleInputChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setPokemonData({
			...pokemonData,
			[property]: value,
		});

		pokemonValidation(
			{
				...pokemonData,
				[property]: value,
			},
			property,
			errors,
			setErrors
		);
	};

	const handleSelectedType = (event) => {
		const name = event.target.name;
		const checked = event.target.checked;

		if (!checked) {
			const filtered = pokemonData.types.filter((type) => type !== name);
			setPokemonData({
				...pokemonData,
				types: filtered,
			});
		} else {
			setPokemonData({
				...pokemonData,
				types: [...pokemonData.types, name],
			});
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		postPokemon(pokemonData);
		setPokemonData(initialState);
	};

	return (
		<>
		<p className={style.title}>Create a Pokemon</p>
			<div className={style.componentContainer}>
				<form className={style.formContainer} onSubmit={handleSubmit}>
					<div className={style.formGroup}>
						<label>Name </label>
						<input
							name="name"
							type="text"
							value={pokemonData.name}
							onChange={handleInputChange}
						/>
						<p>{errors.name}</p>
					</div>
					<div className={style.formGroup}>
						<label>Image URL </label>
						<input
							name="image"
							type="text"
							value={pokemonData.image}
							onChange={handleInputChange}
						/>
						<p>{errors.image}</p>
					</div>
					<div className={style.formGroup}>
						<label>Hit Points </label>
						<input
							name="hit_points"
							type="number"
							value={pokemonData.hit_points}
							onChange={handleInputChange}
						/>
						<p>{errors.hit_points}</p>
					</div>
					<div className={style.formGroup}>
						<label>Attack </label>
						<input
							name="attack"
							type="number"
							value={pokemonData.attack}
							onChange={handleInputChange}
						/>
						<p>{errors.attack}</p>
					</div>
					<div className={style.formGroup}>
						<label>Defense </label>
						<input
							name="defense"
							type="number"
							value={pokemonData.defense}
							onChange={handleInputChange}
						/>
						<p>{errors.defense}</p>
					</div>
					<div className={style.formGroup}>
						<label>Speed </label>
						<input
							name="speed"
							type="number"
							value={pokemonData.speed}
							onChange={handleInputChange}
						/>
						<p>{errors.speed}</p>
					</div>
					<div className={style.formGroup}>
						<label>Height </label>
						<input
							name="height"
							type="number"
							value={pokemonData.height}
							onChange={handleInputChange}
						/>
						<p>{errors.height}</p>
					</div>
					<div className={style.formGroup}>
						<label>Weight </label>
						<input
							name="weight"
							type="number"
							value={pokemonData.weight}
							onChange={handleInputChange}
						/>
						<p>{errors.weight}</p>
					</div>
					<div>
						<label>Types </label>
						<div className={style.typesContainer}>
							{types.map((type) => (
								<div key={type.name}>
									<label>
										<input
											name={type.name}
											type="checkbox"
											checked={pokemonData.types.includes(
												type.name
											)}
											onChange={handleSelectedType}
										/>
										{type.name.charAt(0).toUpperCase() +
											type.name.slice(1)}
									</label>
								</div>
							))}
						</div>
					</div>
					<p>{errors.types}</p>
					<button disabled={disablePost} type="submit">
						Agregar Pokémon
					</button>
				</form>
				<Preview pokemon={pokemonData} />
			</div>
		</>
	);
};

export default Form;
