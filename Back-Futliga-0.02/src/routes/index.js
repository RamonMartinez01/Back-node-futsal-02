const express = require('express');
const equipoRouter = require('./equipo.router');
const router = express.Router();

// colocar las rutas aquí
router.use(equipoRouter)

module.exports = router;
