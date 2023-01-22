const { Player } = require('./player.model');
const { Team } = require('./team.model');

const initModels = () => {
    // 1 player - 1 team
    Player.hasOne(Team);
    Team.belongsTo(Player);
}

module.exports = { initModels };