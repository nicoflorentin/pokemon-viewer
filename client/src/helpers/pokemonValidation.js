const pokemonValidation = (pokemonData, property, errors, setErrors) => {
	if (!pokemonData[property]) {
		setErrors({ ...errors, [property]: "Empty Field" });
	} else {
		setErrors({ ...errors, [property]: "" });
	}

};

export default pokemonValidation;
