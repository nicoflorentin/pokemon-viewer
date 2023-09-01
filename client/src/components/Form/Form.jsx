import React, { useEffect, useState } from "react";
import pokemonValidation from "../../helpers/pokemonValidation";
import postPokemon from "../../helpers/postPokemon";
import { useSelector } from "react-redux";
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
		<p className={null}>Create a Pokemon</p>
			<div className={null}>
				<form className={null} onSubmit={handleSubmit}>
					<div className={null}>
						<label>Name </label>
						<input
							name="name"
							type="text"
							value={pokemonData.name}
							onChange={handleInputChange}
						/>
						<p>{errors.name}</p>
					</div>
					<div className={null}>
						<label>Image URL </label>
						<input
							name="image"
							type="text"
							value={pokemonData.image}
							onChange={handleInputChange}
						/>
						<p>{errors.image}</p>
					</div>
					<div className={null}>
						<label>Hit Points </label>
						<input
							name="hit_points"
							type="number"
							value={pokemonData.hit_points}
							onChange={handleInputChange}
						/>
						<p>{errors.hit_points}</p>
					</div>
					<div className={null}>
						<label>Attack </label>
						<input
							name="attack"
							type="number"
							value={pokemonData.attack}
							onChange={handleInputChange}
						/>
						<p>{errors.attack}</p>
					</div>
					<div className={null}>
						<label>Defense </label>
						<input
							name="defense"
							type="number"
							value={pokemonData.defense}
							onChange={handleInputChange}
						/>
						<p>{errors.defense}</p>
					</div>
					<div className={null}>
						<label>Speed </label>
						<input
							name="speed"
							type="number"
							value={pokemonData.speed}
							onChange={handleInputChange}
						/>
						<p>{errors.speed}</p>
					</div>
					<div className={null}>
						<label>Height </label>
						<input
							name="height"
							type="number"
							value={pokemonData.height}
							onChange={handleInputChange}
						/>
						<p>{errors.height}</p>
					</div>
					<div className={null}>
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
						<div className={null}>
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
