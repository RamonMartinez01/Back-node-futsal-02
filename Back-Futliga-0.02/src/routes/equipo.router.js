const { getAll, create, getOne, remove, update } = require('../controllers/equipo.controllers');
const express = require('express');

const equipoRouter = express.Router();

equipoRouter.route('/equipos')
    .get(getAll)
    .post(create);

equipoRouter.route('/equipos/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = equipoRouter;