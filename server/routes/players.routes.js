const express = require('express');

// controllers
const {
    createPlayer,
    getAllPlayers
} = require('../controllers/players.controller');

// middlewares

// create router
const playersRouter = express.Router();

// routes
playersRouter.get('/', getAllPlayers);
playersRouter.post('/', createPlayer);

module.exports = { playersRouter };