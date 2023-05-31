const getPokemonsController = require('../controllers/getPokemonsController')

module.exports = getPokemonsHandler = async (req, res) => {
	try {
		const allPokemons = await getPokemonsController()
		res.status(200).json(allPokemons);
	} catch (error) {
		res.status(400).json({error: error.message})
	}
}