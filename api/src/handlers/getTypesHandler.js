const getTypesController = require('../controllers/getTypesController')

module.exports = getTypesHandler = async (req, res) => {
	try {
		const types = await getTypesController()
		res.status(200).json(types);
	} catch (error) {
		res.status(400).json({error: error.message})
	}
}