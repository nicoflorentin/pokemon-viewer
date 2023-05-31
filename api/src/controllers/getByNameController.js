const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getByNameDB = async (name) => {
	const pokemonDB = await Pokemon.findAll({
		where: { name },
		include: {
			model: Type,
			attributes: ["name"],
			through: {
				attributes: [],
			},
		},
	});
	return pokemonDB;
};

const getByNameAPI = async (query) => {
	const pokemonAxios = await axios.get(
		`https://pokeapi.co/api/v2/pokemon/${query}`
	);
	const rawPokemon = pokemonAxios.data;
	const { id, name, sprites, stats, height, weight, types } = rawPokemon;
	const pokemonAPI = {
		id,
		name,
		image: sprites.other["official-artwork"].front_default,
		hit_points: stats[0].base_stat,
		attack: stats[1].base_stat,
		defense: stats[2].base_stat,
		speed: stats[5].base_stat,
		height: height,
		weight: weight,
		Types: types.map((type) => {
			return { name: type.type.name };
		}),
	};
	return pokemonAPI;
};

module.exports = getByNameController = async (name) => {
	const pokemonDB = await getByNameDB(name.toLowerCase());
	if (!pokemonDB.length) return await getByNameAPI(name.toLowerCase());
	return pokemonDB[0];
};
