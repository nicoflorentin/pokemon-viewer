const postPokemonController = require('../controllers/postPokemonController')

module.exports = postPokemonHandler = async (req, res) => {
	const pokemon = req.body	
	try {
		const newPokemon = await postPokemonController(pokemon)
		res.status(200).send('nwepokemon');
	} catch (error) {
		res.status(400).json({error: error.message})
	}
}