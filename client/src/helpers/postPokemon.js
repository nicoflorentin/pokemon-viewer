import axios from 'axios'

// const postPokemon = ({name, image, hit_points, attack, defense, speed, height, weight, types}) => {
const postPokemon = (pokemon) => {
	// Configuración de la solicitud POST
	const config = {
	  method: 'post',
	  // url: 'http://localhost:3001/pokemons',
	  url: 'https://pokemon-api-82j0.onrender.com/pokemons',
	//   url: 'http://localhost:3001/asd',
	  data: pokemon
	};
	
	// Realizar la solicitud POST
	axios(config)
	  .then(function (response) {
		console.log(response.data); 
		alert('pokemon created')
	  })
	  .catch(function (error) {
		console.log(error.message); 
		alert('pokemon create failed')
	  });
};

export default postPokemon