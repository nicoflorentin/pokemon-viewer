const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getPokemonDB = async (id) => {
	console.log("uuid");
	const pokemonDB = await Pokemon.findByPk(id, {
		include: {
			model: Type,
			attributes: ["name"],
			through: { attributes: [] },
		},
	});

	return pokemonDB;
};

const getPokemonAPI = async (id) => {
	console.log("id");
	const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const rawPokemon = response.data;
	const { name, sprites, stats, height, weight, types } = rawPokemon;
	const pokemonAPI = {
		name: name,
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

module.exports = getByIdController = async (id) => {
	if (isNaN(id)) {
		return getPokemonDB(id);
	} else {
		return getPokemonAPI(id);
	}
};
