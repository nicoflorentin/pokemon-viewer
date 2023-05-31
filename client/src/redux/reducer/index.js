/* Importa las action-types aquí. */
import {
	GET_TYPES,
	GET_POKEMONS,
	GET_POKEMON_BY_ID,
	GET_POKEMON_BY_NAME,
	CLEAN_DETAIL,
	ORDER_POKEMONS,
	FILTER_BY_TYPE,
} from "../actions/index";

const initialState = {
	pokemons: [],
	filtered: [],
	types: [],
	detail: {},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TYPES:
			console.log("GET TYPES");
			return { ...state, types: action.payload };

		case GET_POKEMONS:
			console.log("GET POKEMONS");
			return {
				...state,
				pokemons: action.payload,
				filtered: action.payload,
			};

		case GET_POKEMON_BY_ID:
			console.log("GET DETAIL");
			return { ...state, detail: action.payload };

		case CLEAN_DETAIL:
			console.log("CLEAN DETAIL");
			return { ...state, detail: action.payload };

		case GET_POKEMON_BY_NAME:
			console.log("GET BY NAME");
			if (action.payload.length) {
				return { ...state, filtered: action.payload };
			} else {
				return { ...state, filtered: state.pokemons };
			}

		case ORDER_POKEMONS:
			console.log("ORDER_POKEMONS");
			const toOrder = [...state.filtered];
			const ordered = toOrder.sort((a, b) => {
				if (action.payload.sort === "attack") {
					if (action.payload.action === "ASCENDANT") {
						return a.attack - b.attack;
					} else {
						return b.attack - a.attack;
					}
				}
				if (action.payload.sort === "name") {
					if (action.payload.action === "ASCENDANT") {
						return a.name.localeCompare(b.name);
					} else {
						return b.name.localeCompare(a.name);
					}
				}
			});
			return {
				...state,
				filtered: ordered,
			};

		case FILTER_BY_TYPE:
			console.log("FILTER_BY_TYPE");
			if (action.payload === "all") {
				return { ...state, filtered: state.pokemons };
			} else {
				return {
					...state,
					filtered: state.pokemons.filter((pokemon) =>
						pokemon.Types.map((type) => type.name).includes(
							action.payload
						)
					),
				};
			}

		default:
			return state;
	}
};

export default rootReducer;
