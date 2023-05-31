const { Router } = require("express");
const getTypesHandler = require('../handlers/getTypesHandler')

const typeRouter = Router();

typeRouter.get("/", getTypesHandler);

module.exports = typeRouter;
