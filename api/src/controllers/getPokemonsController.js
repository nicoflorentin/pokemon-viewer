const axios = require("axios");

module.exports = getPokemonsController = async () => {
	const rawPokemons = await axios(
		"https://pokeapi.co/api/v2/pokemon?limit=151"
		// "https://pokeapi.co/api/v2/pokemon?limit=20"
	);
	const promiseArray = rawPokemons.data.results.map((pokemon) =>
		axios(pokemon.url)
	);

	const detailedPokemons = await Promise.allSettled(promiseArray).then(
		(results) =>
			results
				.filter((result) => result.status === "fulfilled")
				.map((result) => result.value.data)
	);

	let id = 1
	const pokemons = detailedPokemons.map(
		({ name, sprites, stats, height, weight, types }) => {
			return {
				id: id++,
				name: name,
				image: sprites.other["official-artwork"].front_default,
				hit_points: stats[0].base_stat,
				attack: stats[1].base_stat,
				defense: stats[2].base_stat,
				speed: stats[5].base_stat,
				height: height,
				weight: weight,
				Types: types.map((type) =>{return {name :type.type.name}}),
			};
		}
	);
	return pokemons;
};

// const axios = require("axios");

// module.exports = getPokemonsController = async () => {
// 	const rawPokemons = await axios(
// 		"https://pokeapi.co/api/v2/pokemon?limit=151"
// 	);
// 	const promiseArray = rawPokemons.data.results.map((pokemon) => axios(pokemon.url))
// 	const detailedPokemons = await Promise.all(promiseArray).then((res) => res.map((poke) => poke.data))
// 	const pokemons = detailedPokemons.map((pokemon) => {
// 		return {
// 			name: pokemon.name,
// 			image: pokemon.sprites.other['official-artwork'].front_default,
// 			hit_points: pokemon.stats[0].base_stat,
// 			attack: pokemon.stats[1].base_stat,
// 			defense: pokemon.stats[2].base_stat,
// 			speed: pokemon.stats[5].base_stat,
// 			height: pokemon.height,
// 			weight: pokemon.weight
// 		}
// 	});

// 	return pokemons
// };
