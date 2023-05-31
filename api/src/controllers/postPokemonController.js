const { Pokemon, Type } = require("../db");

module.exports = postPokemonController = async ({
	name,
	image,
	hit_points,
	attack,
	defense,
	speed,
	height,
	weight,
	types,
}) => {
	const foundPokemon = await Pokemon.findOne({
		where: {
			name,
		},
	});

	if (!foundPokemon) {
		const newPokemon = await Pokemon.create({
			name: name.toLowerCase(),
			image,
			hit_points,
			attack,
			defense,
			speed,
			height,
			weight,
		});

		const foundTypes = await Type.findAll({
			where: {
				name: types,
			},
		});
		await newPokemon.addTypes(foundTypes);
		return newPokemon;
	} else {
		throw new Error("Pokemon already created");
	}
};
