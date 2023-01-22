const { db } = require('../utils/db.util');
const { DataTypes } = require('sequelize');

const Player = db.define('player', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secondtname: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname2: {
        type: DataTypes.STRING,
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teamId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pass_since: {
        type: DataTypes.DATE,
        allowNull: false
    },
    pass_until: {
        type: DataTypes.DATE,
        allowNull: false
    },
    teamId_loan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    loan_since: {
        type: DataTypes.DATE,
        allowNull: false
    },
    loan_until: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    }
})

module.exports = { Player };