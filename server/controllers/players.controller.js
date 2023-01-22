const { Player } = require('../models/player.model');

// catch async

// controllers
const getAllPlayers = async(req, res, next) => {
    const players = await Player.findAll({
        where: { status: 'active' },
        // include team
    })

    res.status(200).json({
        status: 'success',
        data: {
            players
        }
    })
}

const createPlayer = async(req, res, next) => {
    const {
        firstname,
        secondname,
        lastname,
        lastname2,
        birth_date,
        position,
        teamId,
        pass_since,
        pass_until,
        teamId_loan,
        loan_since,
        loan_until,
        status
    } = req.body;
    
    const newPlayer = await Player.create({
        firstname,
        secondname,
        lastname,
        lastname2,
        birth_date,
        position,
        teamId,
        pass_since,
        pass_until,
        teamId_loan,
        loan_since,
        loan_until,
        status
    })

    res.status(201).json({
        status: 'success',
        data: {
            newPlayer
        }
    })
}

module.exports = {
    getAllPlayers,
    createPlayer
}