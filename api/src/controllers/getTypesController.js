const axios = require("axios");
const { Type } = require("../db");

module.exports = getTypesController = async () => {
	const typesDB = await Type.findAll();

	if (typesDB.length) {
		return typesDB;
	} else {
		const rawTypes = await axios("https://pokeapi.co/api/v2/type");
		const types = rawTypes.data.results.map((rawType) => {
			return {
				name: rawType.name,
			};
		});
		await Type.bulkCreate(types);
		return await Type.findAll();
	}
};
