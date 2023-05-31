const getByIdController = require('../controllers/getByIdController')

module.exports = getPokemonsHandler = async (req, res) => {
	try {
		const { id } = req.params
		const pokemon = await getByIdController(id)
		res.status(200).json(pokemon)
	} catch (error) {
		res.status(400).json({error: error.message})
	}
}