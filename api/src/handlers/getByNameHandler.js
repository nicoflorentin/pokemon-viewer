const getByNameController = require("../controllers/getByNameController");

module.exports = getByName = async (req, res) => {
	const { name } = req.query;
	try {
		const pokemon = await getByNameController(name);
		res.status(200).json(pokemon);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
