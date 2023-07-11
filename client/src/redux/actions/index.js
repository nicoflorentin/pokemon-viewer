import axios from "axios";

export const GET_TYPES = "GET_TYPES";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const ORDER_POKEMONS = 'ORDER_POKEMONS'
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE'

const DB_HOST = 'https://pokemon-api-82j0.onrender.com'


export const getTypes = () => {
	console.log(GET_TYPES);
	return function (dispatch) {
		return axios(`${DB_HOST}/types`)
			.then((response) => {
				// console.log(response.data);
				dispatch({ type: GET_TYPES, payload: response.data });
			})
			.catch((error) => console.error(error.message));
	};
};

export const getPokemons = () => {
	console.log(GET_POKEMONS);
	return function (dispatch) {
		return axios(`${DB_HOST}/pokemons`)
			.then((response) => {
				dispatch({ type: GET_POKEMONS, payload: response.data });
			})
			.catch((error) => console.error(error.message));
	};
};

export const getPokemonById = (id) => {
	console.log(GET_POKEMON_BY_ID);
	return function (dispatch) {
		return axios(`${DB_HOST}/pokemons/${id}`)
			.then((response) => {
				dispatch({ type: GET_POKEMON_BY_ID, payload: response.data });
			})
			.catch((error) => console.error(error.message));
	};
};

export const cleanDetail = () => {
	console.log(CLEAN_DETAIL);
	return function (dispatch) {
		return dispatch({ type: CLEAN_DETAIL, payload: [] });
	};
};

export const getPokemonByName = (name) => {
	console.log(GET_POKEMON_BY_NAME);
	return function (dispatch) {
		if (name) {
			return axios(`${DB_HOST}/pokemons/name?name=${name}`)
				.then((response) => {
					dispatch({ type: GET_POKEMON_BY_NAME, payload: [response.data] });
				})
				.catch((error) => console.error(error.message));
		} else {
			return dispatch({ type: GET_POKEMON_BY_NAME, payload: [] });
		}
	};
};

export const orderPokemons = (order) => {
	console.log(ORDER_POKEMONS);
	return function (dispatch) {
		return dispatch({ type: ORDER_POKEMONS, payload: order });
	};
};

export const filterByType = (type) => {
	console.log(FILTER_BY_TYPE);
	return function (dispatch) {
		return dispatch({ type: FILTER_BY_TYPE, payload: type });
	};
};

