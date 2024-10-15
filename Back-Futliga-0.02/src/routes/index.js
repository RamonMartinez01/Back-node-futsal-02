const express = require('express');
const equipoRouter = require('./equipo.router');
const image = require('../models/image');
const imageRouter = require('./image.router');
const router = express.Router();

// colocar las rutas aquí
router.use(equipoRouter)
router.use(imageRouter)

module.exports = router;
