const { Router } = require("express");
const getPokemonsHandler = require('../handlers/getPokemonsHandler')
const getByNameHandler = require('../handlers/getByNameHandler');
const getByIdHandler = require("../handlers/getByIdHandler");
const postPokemonHandler = require("../handlers/postPokemonHandler");

const pokemonRouter = Router();

pokemonRouter.get("/", getPokemonsHandler);
pokemonRouter.get("/name", getByNameHandler);
pokemonRouter.get("/:id", getByIdHandler);
pokemonRouter.post("/", postPokemonHandler);

module.exports = pokemonRouter;
